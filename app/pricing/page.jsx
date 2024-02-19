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
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    try {
        if(
          !userInfo
        ){
          toast.error('Please login to continue');
          return;
        }
        // Fetch Razorpay order ID
        const res = await axios.post(`/api/payment/getRazorpayOrderId/`, {
            planId,
            userId: userInfo._id,
        });

        // Extract data from response
        const { key, amount, currency, id: orderId } = res.data;

        // Create options for Razorpay
        const options = {
            key,
            amount,
            currency,
            name: userInfo.username,
            description: userInfo.nameOftheFirm,
            order_id: orderId,
            handler(response) {
                const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
                makePaymentMutation({
                    razorpay_order_id,
                    razorpay_payment_id,
                    razorpay_signature,
                    userId: userInfo._id,
                })
                .then(() => {
                    // Payment success alert
                    toast.success('Payment successful');
                })
                .catch(error => {
                    console.error("Error making payment:", error);
                    alert("Error making payment. Please try again.");
                });
            },
            prefill: {
                name: userInfo.nameOftheFirm,
                email: userInfo.email,
                // Add phone number if available
                contact: userInfo.phoneNumber || '',
            },
        };

        // Initialize Razorpay payment object
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (error) {
        console.error("Error in makePayment:", error);
        // Handle error appropriately, e.g., show a toast message
        toast.error('Error processing payment. Please try again.');
    }
};


  const id = useId();

  return (
    <main className="z-0 bg-primary">
      {/* Render the header component */}
      <PagesHeader title="Membership" bannerImage={galleryBanner} />
      <ToastContainer />
      <div className="flex flex-col py-8 space-y-4 sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-evenly md:space-y-0 ">
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data &&
          Object.keys(data).map((plan) => (
            <span
              key={id}
              onClick={() => {
                makePayment(data[plan].id);
              }}
            >
              <PricingCard title={data[plan].title} price={data[plan].price} features={data[plan].features} />
            </span>
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
