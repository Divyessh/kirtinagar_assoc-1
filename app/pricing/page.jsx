'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import Script from 'next/script';
import { useId } from 'react';
import { useSession } from 'next-auth/react';
import galleryBanner from '../../assets/png/services.png';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import PricingCard from '../../components/pricing/pricingCard';
// import { registerUser } from '../../lib/auth/registerUser';

const PricingComponent = () => {
  const { data: session } = useSession();
  const userInfo = session?.user;
  // console.log(isUser);

  // data variable is movided to store
  const { data, isLoading } = useQuery({
    queryKey: ['priceinfo'],
    queryFn: async () => {
      const res = await axios.get(`/api/payment/info`);
      return res?.data;
    },
  });

  // mutation to make payment with speicific user and payment id
  async function makePaymentMutation({ razorpay_order_id, razorpay_payment_id, razorpay_signature, userId }) {
    const res = await axios.post(`/api/payment/paymentverify/`, {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
    });
    if (res.status === 200) {
      // redirect user to that page
      return res?.data;
    }

    throw new Error('Invalid Payment');
    // return res?.data;
  }

  const makePayment = async (planId) => {
    const res = await axios.post(`/api/payment/getRazorpayOrderId/`, {
      planId,
      // eslint-disable-next-line no-underscore-dangle
      userId: userInfo._id,
    });

    // filter out price product

    const options = {
      key: res.data.key,
      amount: res.data.amount,
      currency: res.data.currency,
      name: userInfo.username,
      description: userInfo.nameOftheFirm,
      // image: "user image",
      order_id: res.data.id,
      handler(response) {
        // console.log(response);
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
        makePaymentMutation({
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
          // eslint-disable-next-line no-underscore-dangle
          userId: userInfo._id,
        })
          .then(alert)
          .catch(console.log);
      },
      prefill: {
        name: userInfo.username,
        email: userInfo.email,
        // contact: userInfo.phoneNumber,
      },
    };

    // console.log(options);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const id = useId();

  return (
    <main className="z-0 bg-primary">
      {/* Render the header component */}
      <PagesHeader title="Membership" bannerImage={galleryBanner} />
      <div className="flex flex-col py-8 space-y-4 sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-evenly md:space-y-0 ">
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data &&
          Object.keys(data).map((plan) => (
            <sapn
              key={id}
              onClick={() => {
                makePayment(data[plan].id);
              }}
            >
              <PricingCard title={data[plan].title} price={data[plan].price} features={data[plan].features} />
            </sapn>
          ))}
        <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
      </div>
      <span className="flex items-center justify-center w-full text-black text-md ">
        <button type="button" className="btn btn-primary hover:bg-secondary">
          <Link href="/terms">Terms</Link>
        </button>
        <button type="button" className="btn btn-primary hover:bg-secondary">
          <Link href="/cancellation">Our Cancellation Policy</Link>
        </button>
      </span>
    </main>
  );
};

export default PricingComponent;
