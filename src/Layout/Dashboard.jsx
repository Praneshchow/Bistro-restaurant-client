import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdBorderColor } from "react-icons/md";

const Dashboard = () => {
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
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaRegCalendarAlt></FaRegCalendarAlt>Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    
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