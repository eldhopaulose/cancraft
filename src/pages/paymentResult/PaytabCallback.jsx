import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const PaytabCallback = () => {
  const { cartId } = useParams();
  const location = useLocation();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to parse the form data from the URL
        const searchParams = new URLSearchParams(location.search);
        const data = Object.fromEntries(searchParams.entries());

        // If no data in URL, try to parse from the body
        if (Object.keys(data).length === 0) {
          const response = await fetch(window.location.href, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: document.body.innerHTML,
          });
          const text = await response.text();
          const bodyParams = new URLSearchParams(text);
          Object.assign(data, Object.fromEntries(bodyParams.entries()));
        }

        setPaymentData(data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
        setPaymentData(null);
      }
    };

    fetchData();
  }, [location]);

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