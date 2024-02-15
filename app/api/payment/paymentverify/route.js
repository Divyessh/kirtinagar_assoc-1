import { NextResponse } from 'next/server';
// import Razorpay from 'razorpay';
import crypto from 'crypto';
import User from '../../../../models/userModel';
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';

// eslint-disable-next-line no-unused-vars
const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);

// eslint-disable-next-line no-unused-vars
export async function POST(req) {
  // eslint-disable-next-line no-unused-vars
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = await req.json();

  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const expectedSignature = hmac.digest('hex');

  if (expectedSignature !== razorpay_signature) {
    // throw new Error('Invalid Payment');
    return NextResponse.json(
      {
        message: 'failed',
      },
      {
        status: 400,
      },
    );
  }

  // save payment to db
  try {
    await connectMongoDB();
    const data = await User.findOneAndUpdate(
      { _id: userId },
      {
        isVerified: true,
        verifiedPaymentId: razorpay_order_id,
      },
      {
        new: true,
        upsert: true,
        // Return additional properties about the operation, not just the document
        includeResultMetadata: true,
        // { new: true },
      },
    );
    console.log('payment added: ', data);
  } catch (error) {
    console.log('Error: ', error);
    throw new Error(error);
  } finally {
    await disconnectMongoDB();
  }

  return NextResponse.json(
    {
      message: 'success',
    },
    {
      status: 200,
    },
  );

  // const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  // console.log('id==', body);

  // const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET).update(body.toString()).digest('hex');

  // const isAuthentic = expectedSignature === razorpay_signature;

  // if (isAuthentic) {
  //   console.log(Payment);

  //   await connectMongoDB();

  //   await Payment.create({
  //     razorpay_order_id,
  //     razorpay_payment_id,
  //     razorpay_signature,
  //   });

  //   //  return NextResponse.redirect(new URL('/paymentsuccess', req.url));
  // } else {
  //   return NextResponse.json(
  //     {
  //       message: 'fail',
  //     },
  //     {
  //       status: 400,
  //     },
  //   );
  // }

  // return NextResponse.json(
  //   {
  //     message: 'success',
  //   },
  //   {
  //     status: 200,
  //   },
  // );
}
