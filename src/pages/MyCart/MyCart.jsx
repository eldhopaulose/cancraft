import React, { useEffect, useState } from "react";
import { OrderCard } from "../../components/OrderCard";
import { Button } from "@material-tailwind/react";

function MyCart() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userDataString = localStorage.getItem('user');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setUser(userData);
        }
    }, []);

    return (
        <div className="grid grid-cols-1 grid-rows gap-4">
            <h4 className="text-3xl font-bold flex justify-center mt-10 mb-10">My Cart</h4>
            {user ? (
                <div className="flex justify-center flex-wrap gap-10">
                    <OrderCard />
                   
                </div>
            ) : (
                <div className="flex justify-center flex-wrap gap-10">
                    <p className="text-xl font-semibold text-red-500">
                        You should log in to access the cart.
                    </p>
                </div>
            )}
             
        </div>
    );
}

export default MyCart;
