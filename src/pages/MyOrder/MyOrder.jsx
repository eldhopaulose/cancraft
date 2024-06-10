import { OrderCard } from "../../components/OrderCard"

function MyOrder() {
    return (

        <div className="grid grid-cols-1 grid-rows gap-4">
            <h4 className="text-3xl font-bold flex justify-center mt-10 mb-10">My Orders</h4>
            <div className="flex justify-center flex-wrap gap-10">


                <OrderCard />

            </div>
        </div>

    )
}

export default MyOrder