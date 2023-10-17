import { NavLink } from "react-router-dom";



const Navber = () => {
    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-black border px-2 py-1 rounded font-bold bgTrans " : ""
        }
    >
        HOME
    </NavLink>;
    const addProduct = <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-black border px-2 py-1 rounded font-bold bgTrans " : ""
        }
    >
        ADD PRODUCT
    </NavLink>;
    const cart = <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-black border px-2 py-1 rounded font-bold bgTrans " : ""
        }
    >
        CART
    </NavLink>;











    return (
        <div>
            <div className="bg-white">
            <marquee className="bg-black" direction="">
                        <h1 className="text-sm font-normal text-white py-4">
                            ENJOY THE ESSENCE OF ENIGMATIC SPICES!
                        </h1>
                    </marquee>
                <div className="max-w-screen-xl	 mx-auto md:px-2">
                    
                    <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                        <div className="navbar flex justify-between items-center ">
                            <div>
                                <img className="w-[120px] " src={'https://i.ibb.co/64491Jh/logo-2.png'} alt="" />

                            </div>
                            <div className="">
                                <div className="dropdown">
                                    <label tabIndex={1} className="btn btn-ghost md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] text-black w-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white mx-4 w-40  text-gray-400 py-4 border z-[10]  rounded  -left-20 ">
                                        <li className="">{home}</li>
                                        <li className="py-4">{addProduct}</li>
                                        <li>{cart}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-center hidden md:flex">
                                <ul className=" menu-horizontal flex items-center px-4 gap-2 lg:gap-10  text-gray-400 font-medium md:font-bold">
                                    <li className="">{home}</li>
                                    <li className="">{addProduct}</li>
                                    <li>{cart}</li>


                                    {/* {
                                        user ? <>
                                            <Link onClick={handelLogout} className=" py-2 px-4 rounded-full font-bold bg-white text-gray-500 md:ml-4 lg:ml-6">
                                                Logout
                                            </Link>
                                        </> :
                                            <>

                                                <Link to='/login' className=" py-2 px-4 rounded-full font-bold bg-white text-gray-500 md:ml-4 lg:ml-6">
                                                    Login
                                                </Link>
                                            </>
                                    } */}

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