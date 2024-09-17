import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import axios from 'axios';
import { BASE_URL, DEV_URL } from '../../src/constants/constants';
import { createPaymentPage, setConfig } from '../utils/paytabsUtils';

export function OrderCard({ user }) {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
    const [address, setAddress] = useState({
        name: '',
        streetAddress: '',
        phoneNumber: '',
        pincode: '',
    });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const userDataString = localStorage.getItem('user');
                const userData = JSON.parse(userDataString);
                const token = userData.token;
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                };
                const response = await axios.get(`${BASE_URL}/cart/getallcart`, config);
                setOrders(response.data.carts);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchOrders();
    }, [user]);

    useEffect(() => {
        setConfig('148637', 'SDJ9TRKWWD-JJ96KNGLLD-TLNWDWM66H', 'AUE');
    }, []);

    const handlePayment = () => {
        setIsAddressPopupOpen(true);
    };

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    // const handleAddressSubmit = () => {
    //     setIsAddressPopupOpen(false);
    //     proceedWithPayment(address);
    // };

    const proceedWithPayment = (addressDetails) => {
        let transaction = {
            type: "sale",
            class: "ecom"
        };

        let cart = {
            id: "cart123",
            currency: "INR",
            amount: totalAmount,
            description: "Order payment"
        };

        let paymentMethods = ["all"];

        const transaction_details = [
            transaction.type,
            transaction.class  
        ];

        const cart_details = [
            cart.id,
            cart.currency,
            cart.amount,
            cart.description
        ];

        let customer = {
            name: addressDetails.name,
            email: user.email,
            phone: addressDetails.phoneNumber,
            street: addressDetails.streetAddress,
            city: "City",
            state: "State",
            country: "AE",
            zip: addressDetails.pincode,
            ip: "127.0.0.1"
        };

        const customer_details = [
            customer.name,
            customer.email,
            customer.phone,
            customer.street,
            customer.city,
            customer.state,
            customer.country,
            customer.zip,
            customer.ip
        ];

        const shipping_address = customer_details;

        let url = {
            callback: "https://yourwebsite.com/callback",
            response: "https://yourwebsite.com/response"
        };
        const response_URLs = [
            url.callback,
            url.response
        ];

        const lang = "ar";

        const paymentPageCreated = function (results) {
            console.log(results);
        };

        const frameMode = true;

        createPaymentPage( 
            paymentMethods,
            transaction_details,
            cart_details,
            customer_details,
            shipping_address,
            response_URLs,
            lang,
            paymentPageCreated,
            frameMode
        );
    };

    const totalAmount = orders.reduce((total, order) => total + order.price, 0);


    const handleAddressSubmit = async () => {
      try {
          const userDataString = localStorage.getItem('user');
          const userData = JSON.parse(userDataString);
          const token = userData.token;
          const config = {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              }
          };

          const cartIds = orders.map(order => order._id);



          const addressData = {
              // userId: user._id, // Assuming user object has _id field
              ...address,
              cartIds
          };

          const response = await axios.post(`${BASE_URL}/cart/create-update-address`, addressData, config);
          console.log('Address saved:', response.data);

          setIsAddressPopupOpen(false);
          initiatePayment(response.data.addresDetails,response.data.order);
          // proceedWithPayment(response.data.address);
      } catch (error) {
          console.error('Error saving address:', error);
          setError(error.message);
      }
  };



  const initiatePayment = async (addressDetails,orderData) => {
    try {

        const userDataString = localStorage.getItem('user');
        const userData = JSON.parse(userDataString);
        const token = userData.token;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        const totalAmount = orders.reduce((total, order) => total + order.price, 0).toFixed(2);

        const paymentData = {
            transaction: {
                type: "sale",
                class: "ecom"
            },
            cart: {
                id: orderData._id ,
                currency: "AED",
                amount: orderData.totalPrice,
                description: "Order payment"
            },
            customer: {
                name: addressDetails.name,
                 email: addressDetails.email,
                phone: addressDetails.phoneNumber,
                street1: addressDetails.streetAddress,
                city: "City", // You might want to add this to your address form
                state: "State", // You might want to add this to your address form
                country: "ARE",
                zip: addressDetails.pincode,
                ip: "127.0.0.1" // You might want to get the actual IP
            },
            // url: {
            //     callback: `${PAYMENTLINK}`,
            //     response: `${PAYMENTLINK}`
            // },
            lang: "en"
        };

        const response = await axios.post(`${BASE_URL}/payment/initiate`, paymentData, config);
        console.log('Payment initiated:', response.data.redirect_url);

        // Handle the response from your backend
        // This might involve redirecting to a payment page or handling a payment token
        if (response.data.redirect_url) {
            window.location.href = response.data.redirect_url;
        } else {
            // Handle other response types
            console.log('Unexpected payment response:', response.data);
        }
    } catch (error) {
        console.error('Error initiating payment:', error);
        setError(error.message);
    }
};


    return (
        <Card className="w-96 max-w-full mx-auto p-4">
            <List className="flex flex-wrap space-y-4">
                {orders.map(order => (
                    <ListItem key={order._id} className="flex flex-row items-center space-x-4 w-full">
                        <ListItemPrefix>
                            <Avatar variant="circular" alt={order.userId.email} src={order.cropedImage} />
                        </ListItemPrefix>
                        <div className="flex flex-col">
                            <Typography variant="h6" color="blue-gray">
                                {order.userId.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Frame {order.dimension} - Colour {order.frameColor}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Price: {order.price} د.إ
                            </Typography>
                        </div>
                    </ListItem>
                ))}
            </List>
            
            {error && <p className="text-red-500 mt-4">Error: {error}</p>}
            
            <div className="mt-4 mb-4">
                <Typography variant="h6" color="blue-gray">
                    Total Amount: {totalAmount.toFixed(2)} د.إ
                </Typography>
            </div>
            
            <Button onClick={handlePayment}>Pay now</Button>

            <Dialog open={isAddressPopupOpen} handler={() => setIsAddressPopupOpen(false)} size="sm">
                <DialogHeader>Update Address Details</DialogHeader>
                <DialogBody divider>
                    <div className="grid gap-6">
                        <Input label="Name" name="name" value={address.name} onChange={handleAddressChange} />
                        <Input label="Street Address" name="streetAddress" value={address.streetAddress} onChange={handleAddressChange} />
                        <Input label="Phone Number" name="phoneNumber" value={address.phoneNumber} onChange={handleAddressChange} />
                        <Input label="Pincode" name="pincode" value={address.pincode} onChange={handleAddressChange} />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={() => setIsAddressPopupOpen(false)} className="mr-1">
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleAddressSubmit}>
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </Card>
    );
}