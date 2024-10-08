import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> :
                <li><Link to="/dashboard/userhome">Dashboard</Link></li>
        }
        <li>
            <Link to="/dashboard/mycart" className="bg-black">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </Link>
        </li>
        {
            user ? <>
                <li><span className="text-warning">{user.displayName}</span></li>
                <li><Link onClick={handleLogOut} className="bg-warning text-black">Logout</Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-12 mr-5 avatar">
                        {
                            user ?
                                <img className="rounded-full size-min online" src={user.photoURL} /> :
                                <div className="bg-warning text-neutral-content rounded-full">
                                    <span className="text-x text-black">Guest</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;

