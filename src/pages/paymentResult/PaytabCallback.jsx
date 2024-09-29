import React from "react";
import { useParams } from "react-router-dom";

const PaytabCallback = ({ paymentData }) => {
  const { cartId } = useParams();

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
        <p><strong>Customer Email:</strong> {paymentData.customerEmail}</p>
        <p><strong>Response Code:</strong> {paymentData.respCode}</p>
        <p><strong>Response Message:</strong> {paymentData.respMessage}</p>
        <p><strong>Response Status:</strong> {paymentData.respStatus}</p>
        <p><strong>Signature:</strong> {paymentData.signature}</p>
        <p><strong>Token:</strong> {paymentData.token || 'N/A'}</p>
        <p><strong>Transaction Reference:</strong> {paymentData.tranRef}</p>
      </div>
    </div>
  );
};

export default PaytabCallback;