// import { NextResponse } from 'next/server';
// import Razorpay from 'razorpay';
// import shortid from 'shortid';

// const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// export async function GET(req, context) {
//   // console.log(context);
//   const payment_capture = 1;
//   const amount = 1 * 100; // use req.query to get parameters from the query string
//   const currency = 'INR';
//   const options = {
//     amount: amount.toString(),
//     currency,
//     receipt: shortid.generate(),
//     payment_capture,
//     notes: {
//       paymentFor: 'testingDemo',
//       userId: '100',
//       productId: 'P100',
//     },
//   };

//   const order = await instance.orders.create(options);
//   return NextResponse.json({ msg: 'success', order });
// }
