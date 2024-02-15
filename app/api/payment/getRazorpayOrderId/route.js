import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import shortid from 'shortid';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { priceData } from '@/JSONapiData/paymentData/index.js';

// eslint-disable-next-line no-unused-vars
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// eslint-disable-next-line no-unused-vars
export async function POST(req) {
  const { planId, userId } = await req.json();

  //   const userId = user?.id as string;
  //   const price = Object(priceData).find((plan) => plan.id === planId);

  const plan = Object.values(priceData).find((price) => price.id === planId);
  if (!plan) {
    return NextResponse.json({ error: 'wrong id' }, { status: 404 });
  }

  const { amount } = plan;

  const options = {
    amount: (amount * 100).toString(),
    currency: 'INR',
    receipt: shortid.generate(),
    payment_capture: 1,
    notes: {
      userId,
      paymentId: planId,
      paymentFor: plan.title,
    },
  };

  try {
    const response = await instance.orders.create(options);

    return NextResponse.json(
      {
        id: response.id,
        currency: response.currency,
        amount: response.amount,
        key: process.env.RAZORPAY_KEY_ID,
      },
      { status: 200 },
    );
  } catch (err) {
    // console.log(err);
    return NextResponse.json({ error: 'error in creating razorpay order' }, { status: 400 });
  }
}
