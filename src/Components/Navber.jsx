import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';
import DarkModeToggle from "./ToggleButton";
import { BsCart2 } from "react-icons/bs";


const Navber = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user);

    const handelLogout = () => {
        logOut()
            .then(result => {
                // console.log(result);
                swal("Success", "Logout successfully", "success")
                return
            })
            .catch(err => {
                swal("Error", "Logout not successfully", "Error")
            })
    }












    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  border-b-2 px-2 py-1 rounded font-bold bgTrans " : ""
        }
    >
        HOME
    </NavLink>;
    const addProduct = <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  border-b-2 px-2 py-1 rounded font-bold bgTrans " : ""
        }
    >
        ADD PRODUCT
    </NavLink>;
    const cart = <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  " : ""
        }
    >
        <BsCart2 className=" md:text-white md:w-[30px] md:h-[30px]"></BsCart2>

    </NavLink>;





    // AiOutlineShoppingCart

    return (
        <div>
            <div className="bg-[#2B3440] ">
                <marquee className="" direction="">
                    <h1 className="text-sm font-normal text-white ">
                        ENJOY THE ESSENCE OF ENIGMATIC SPICES!
                    </h1>
                </marquee>

                <div className="max-w-screen-xl  mx-auto md:px-2">

                    <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                        <div className="navbar flex justify-between items-center ">
                            <div>
                                <img className="w-[70px] " src={'https://i.ibb.co/1ZPL0Wm/icon-2.png'} alt="" />
                                <h1 className="text-3xl text-white font-bold uppercase">food<span className="text-4xl lowercase">i</span>ly</h1>
                            </div>
                            <div className="">
                                <div className="dropdown">
                                    <label tabIndex={1} className="btn btn-ghost md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] text-black w-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white mx-4 py-10  text-gray-400 px-4 w-40 border z-[10]  rounded  -left-20 ">

                                        <li className="">{home}</li>
                                        <li className="py-4">{addProduct}</li>

                                        <li>{cart}</li>
                                        <li><DarkModeToggle /></li>
                                        {
                                            user ? <>
                                                <div className="flex justify-center items-start flex-col-reverse">
                                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                        {
                                                            user ? <>
                                                                <div className="w-10 rounded-full flex items-center ">
                                                                    <img src={user.photoURL == null ? 'https://i.ibb.co/2vkJbGD/images.png' : user.photoURL} alt="" />
                                                                </div>
                                                                <p className="font-mono">{user.displayName == null ? 'MR' : user.displayName}</p>
                                                            </> :
                                                                <>

                                                                </>
                                                        }
                                                    </label>
                                                    <Link onClick={handelLogout} className="btn-sm btn uppercase btn-warning my-3 py-2 px-4 rounded-full font-bold bg-white text-gray-500 ">
                                                        Logout
                                                    </Link>
                                                </div>
                                            </> :
                                                <>

                                                    <Link to='/login' className=" btn-sm btn-info mt-5 rounded-full font-bold bg-white text-gray-500 ">
                                                        Login
                                                    </Link>
                                                </>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-center hidden md:flex">
                                <ul className=" menu-horizontal flex items-center px-4 gap-2 lg:gap-10  text-white font-medium md:font-bold">
                                    <ul className="lg:mr-[200px] md:lg:mr-[150px] flex gap-5 justify-center items-center">
                                        <li className="">{home}</li>
                                        <li className="">{addProduct}</li>
                                    </ul>
                                    <li>{cart}</li>
                                    <DarkModeToggle />
                                    {
                                        user ? <>
                                            <div className=" flex justify-center items-center gap-3">
                                                <Link onClick={handelLogout} className="px-2 uppercase py-1 border rounded-full font-bold bg-white text-gray-500 ">
                                                    Logout
                                                </Link>
                                                <label tabIndex={0} className="">
                                                    {
                                                        user ? <>
                                                            <div className="flex gap-1 justify-center items-center">
                                                                <p className="">{user.displayName == null ? " MR. X" : user.displayName}</p>
                                                                <img className="rounded-full w-[50px] border-2" src={user.photoURL == null ? 'https://i.ibb.co/2vkJbGD/images.png' : user.photoURL} alt="" />
                                                            </div>

                                                        </> :
                                                            <>

                                                            </>
                                                    }

                                                </label>
                                            </div>

                                        </> :
                                            <>

                                                <Link to='/login' className="btn btn-success py-2 px-4 rounded-full font-bold bg-white text-gray-500 ">
                                                    Login
                                                </Link>
                                            </>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;