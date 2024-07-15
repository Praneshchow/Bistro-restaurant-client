import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item =>{
        
    }

    return (
        <div className="w-full px-5">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: {total}</h3>
                <button className="btn btn-warning">Pay Bill</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>#</label>
                            </th>
                            <th>Food</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={item.image} alt="food image" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-red-700 text-white"><FaTrash></FaTrash></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MyCart;


