import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const PaytabCallback = () => {
  const { cartId } = useParams(); // Get cartId from URL params
  const location = useLocation(); // Get the URL location object
  const [paymentData, setPaymentData] = useState(null); // State to hold payment data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = {};
        const searchParams = new URLSearchParams(location.search); // Parse query params

        // Convert query params to object
        if (searchParams) {
          data = Object.fromEntries(searchParams.entries());
        }

        // If the form data is sent via POST, try fetching it
        if (Object.keys(data).length === 0) {
          const response = await fetch(window.location.href, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: document.body.innerHTML, // Send body content in POST request
          });

          if (response.ok) {
            const text = await response.text();
            const bodyParams = new URLSearchParams(text);
            data = Object.fromEntries(bodyParams.entries());
          }
        }

        setPaymentData(data); // Store the data in state
      } catch (error) {
        console.error("Error fetching payment data:", error);
        setPaymentData(null); // Set null in case of error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [location]);

  // Loading screen while data is fetched
  if (loading) {
    return <div>Loading transaction data...</div>;
  }

  // Display the transaction details or a fallback if no data is available
  return (
    <div className="grid grid-cols-1 grid-rows gap-4">
      <h4 className="text-3xl font-bold flex justify-center mt-10 mb-10">Transaction Details</h4>
      {paymentData ? (
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
          <p><strong>Transaction status:</strong> {paymentData.status || 'N/A'}</p>

          
        </div>
      ) : (
        <div>
          <p>No transaction data available.</p>
        </div>
      )}
    </div>
  );
};

export default PaytabCallback;
