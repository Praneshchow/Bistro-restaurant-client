import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdBorderColor } from "react-icons/md";
import useCart from "../hooks/useCart";
import { FaUtensils } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO. 
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>


            </div>
            <div className="drawer-side bg-[#D1A054] pt-10">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-black min-h-full w-80 p-4 bg-[#D1A054]  text-lg">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils /> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaList /> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaRegCalendarAlt></FaRegCalendarAlt>Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart">
                                    <FaShoppingCart></FaShoppingCart>My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu"><TiThMenu></TiThMenu>Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><MdBorderColor></MdBorderColor>Order Food</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;