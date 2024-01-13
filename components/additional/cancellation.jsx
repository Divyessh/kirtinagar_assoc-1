import React from 'react';

const TermsAndConditionsModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal-box  ${
        isOpen ? 'absolute' : 'hidden pointer-events-none'
      } bg-primary transition-opacity duration-300 ease-in-out z-100 right-[26rem] top-[20rem] max-w-[60rem] max-h-[40rem]`}
    >
      <button type="button" className="close absolute top-2 right-2 text-black cursor-pointer text-4xl" onClick={onClose}>
        &times;
      </button>
      <div className="text-black">
        <h1 className="text-2xl font-bold mb-2">Cancellation & Refund Policy</h1>
        <p className="mb-2">
          <em>Last updated on Jan 13th, 2024</em>
        </p>

        <p>
          <strong>NEW TIMBER MARKET DEALERS ASSOCIATION</strong> believes in helping its customers as far as possible, and has therefore a
          liberal cancellation policy. Under this policy:
        </p>

        <ul className="list-disc pl-5 mb-4">
          <li>
            Cancellations will be considered only if the request is made within 24hr of placing the order. However, the cancellation request
            may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of
            shipping them.
          </li>
          <li>
            <strong>NEW TIMBER MARKET DEALERS ASSOCIATION</strong> does not accept cancellation requests for perishable items like flowers,
            eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of the product delivered is
            not good.
          </li>
          <li>
            In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will,
            however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within
            24HR of receipt of the products.
          </li>
          <li>
            In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the
            notice of our customer service within 24HR of receiving the product. The Customer Service Team after looking into your complaint
            will take an appropriate decision.
          </li>
          <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
          <li>
            In case of any Refunds approved by the <strong>NEW TIMBER MARKET DEALERS ASSOCIATION</strong>, it’ll take 48HR for the refund to
            be processed to the end customer.
          </li>
        </ul>

        <button
          type="button"
          className="bg-secondary hover:bg-primary hover:text-black text-white font-bold py-2 px-6 rounded w-full "
          onClick={onClose}
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditionsModal;
