import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaytabCallback = () => {
  const { cartId } = useParams();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const captureFormData = async () => {
      // This function will be called when the component mounts
      if (window.paymentData) {
        // If the data has already been captured by the script in index.html
        setPaymentData(window.paymentData);
      } else {
        // If the data hasn't been captured yet, wait for it
        window.addEventListener('paymentDataCaptured', (event) => {
          setPaymentData(event.detail);
        }, { once: true });
      }
    };

    captureFormData();
  }, []);

  if (!paymentData) {
    return <div>Loading transaction data...</div>;
  }

  return (
    <div className="grid grid-cols-1 grid-rows gap-4">
      <h4 className="text-3xl font-bold flex justify-center mt-10 mb-10">Transaction Details</h4>
      <div className="grid grid-cols-2 gap-4">
        <p><strong>Acquirer Message:</strong> {paymentData.acquirerMessage || 'N/A'}</p>
        <p><strong>Acquirer RRN:</strong> {paymentData.acquirerRRN || 'N/A'}</p>
        <p><strong>Cart ID:</strong> {paymentData.cartId || cartId}</p>
        <p><strong>Customer Email:</strong> {paymentData.customerEmail || 'N/A'}</p>
        <p><strong>Response Code:</strong> {paymentData.respCode || 'N/A'}</p>
        <p><strong>Response Message:</strong> {paymentData.respMessage || 'N/A'}</p>
        <p><strong>Response Status:</strong> {paymentData.respStatus || 'N/A'}</p>
        <p><strong>Signature:</strong> {paymentData.signature || 'N/A'}</p>
        <p><strong>Token:</strong> {paymentData.token || 'N/A'}</p>
        <p><strong>Transaction Reference:</strong> {paymentData.tranRef || 'N/A'}</p>
      </div>
    </div>
  );
};

export default PaytabCallback;