import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { DEV_URL } from "../constants/constants";

export function OrderList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userDataString = localStorage.getItem("user");
        if (!userDataString) {
          throw new Error("User not logged in");
        }

        const userData = JSON.parse(userDataString);
        const token = userData.token;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        // Changed endpoint to get all orders instead of single order
        const response = await axios.get(
          `${DEV_URL}/order/getorderbyid`,
          config
        );
        setOrders(
          Array.isArray(response.data) ? response.data : [response.data]
        );
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  const getStatusColor = (status) => {
    switch (status) {
      case 0:
        return "gray"; // Order placed but not paid
      case 1:
        return "green"; // Payment Succeeded
      case 2:
        return "red"; // Payment Failed
      case 3:
        return "orange"; // Pending
      case 4:
        return "blue"; // Refunded
      default:
        return "black"; // Default color for unknown status
    }
  };

  if (loading) {
    return (
      <Card className="w-96 max-w-full mx-auto p-4">
        <p className="text-center text-gray-500">Loading orders...</p>
      </Card>
    );
  }

  return (
    <Card className="w-96 max-w-full mx-auto p-4">
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {orders.length === 0 && !error && (
        <p className="text-center text-gray-500 mt-4">No orders found.</p>
      )}
      <List className="flex flex-wrap space-y-4">
        {orders.map((order) => (
          <ListItem
            key={order._id}
            className="flex flex-row items-center space-x-4 w-full"
          >
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="Order Image"
                src={
                  order.itemlist?.[0]?.cropedImage || "/placeholder-image.png"
                }
              />
            </ListItemPrefix>
            <div className="flex flex-col">
              <Typography variant="h6" color="blue-gray">
                Order ID: {order._id}
              </Typography>
              {order.itemlist?.map((item, index) => (
                <div key={index}>
                  <Typography variant="body2" color="textSecondary">
                    Dimension: {item.dimension}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Frame Colour: {item.frameColor}
                  </Typography>
                </div>
              ))}
              <Typography variant="body2" color="textSecondary">
                Total Price: {order.totalPrice || 0} د.إ
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Order placed on: {new Date(order.createdAt).toLocaleString()}
              </Typography>
              {/* 0:Order placed not paid ,  1:payment Succeeded, 2: Failed , 3:Pending, 4:Refunded  */}
              <Typography
                variant="body2"
                color={getStatusColor(order.paymentStatus)}
              >
                Status:{" "}
                {(() => {
                  switch (order.paymentStatus) {
                    case 0:
                      return "Order Placed (Not Paid)";
                    case 1:
                      return "Payment Succeeded";
                    case 2:
                      return "Payment Failed";
                    case 3:
                      return "Pending";
                    case 4:
                      return "Refunded";
                    default:
                      return "Unknown Status";
                  }
                })()}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
