import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const makePayment = async ({ productId = null, price }) => {

  // Check if user is authenticated
  if (!session) {
    // Redirect to login page or show an error message
    console.error("User not authenticated.");
    // Redirect to the login page
    router.push("/"); // Update with your login page route
    return; // Exit the function
  }

  // "use server"
  const key = process.env.RAZORPAY_API_KEY;
  console.log(key);
  // Make API call to the serverless API
  const order = await axios.get("/api/razorpay", {
    params: {
      price: price,
    },
  });
  order.json()
  // // const { order } = await data.json();
  // console.log(order.id);
  const options = {
    key: key,
    name: "Kirtinagar Timberworks Association",
    currency: order.currency,
    amount: order.currency,
    order_id: order.id,
    description: "Become Kirtinagar Association Member",
    // image: "/next.svg",
    handler: async function (response) {
      // if (response.length==0) return <Loading/>;
      console.log(response);

      const data = await fetch("/api/paymentverify", {
        method: "POST",
        // headers: {
        //   // Authorization: 'YOUR_AUTH_HERE'
        // },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });

      const res = await data.json();

      console.log("response verify==", res);

      if (res?.message == "success") {
        console.log("redirected.......");
        router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id);
      }

      // Validate payment at server - using webhooks is a better idea.
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  paymentObject.on("payment.failed", function (response) {
    alert("Payment failed. Please try again. Contact support for help");
  });
};
