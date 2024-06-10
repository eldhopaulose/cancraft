import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL, DEV_URL } from '../../src/constants/constants';

export function OrderCard({ user }) {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

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

    return (
        <Card className="w-96">
            <List>
                {orders.map(order => (
                    <ListItem key={order._id}>
                        <ListItemPrefix>
                            <Avatar variant="circular" alt={order.userId.email} src={order.cropedImage} />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {order.userId.name}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {order.dimension} - {order.frameColor}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                Price: {order.price} د.إ
                            </Typography>
                        </div>
                    </ListItem>
                ))}
            </List>
            {error && <p>Error: {error}</p>}
        </Card>
    );
}
