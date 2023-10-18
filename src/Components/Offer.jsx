

const Offer = () => {
    return (
        <div>
            <div className="    w-full my-20 ">
                <div className="max-w-7xl mx-auto my-10 px-3 md:px-2 lg:0">
                    <div>
                        <div data-aos="fade-up" className="mt-20 text-center ">
                            <div className="flex justify-center items-center flex-col ">
                                <img className="w-[100px] text-center" src="https://i.ibb.co/7z56DX7/separate.png" alt="" />
                                <h1 className=" text-2xl md:text-4xl font-bold uppercase text-gray-500">special Offer</h1>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-5 gap-10 -z-10 mt-10">
                            <div className="  rounded-lg md:px-14 py-10 text-white md:col-span-2 ">

                                <div className="h-96 border  md:-mr-44 carousel carousel-vertical rounded-box">

                                    <div className="carousel-item h-full ">
                                        {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                        <div className="card card-compact bg-[#D4ECC1]  shadow-xl">
                                            <figure><img className="relative" src={'https://i.ibb.co/XSTGrS8/pngegg-7.png'} alt="Shoes" /></figure>
                                            <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                                <p className="px-8 py-2 bg-blue-400 rounded-full  text-center text-xl font-bold ">30% OFF</p>
                                            </div>
                                            <div className="card-body text-center ">
                                                <h2 className="text-3xl font-bold text-center text-[#333333] p-2 uppercase">special coffee</h2>
                                                <p className="text-lg text-[#BEB996] font-medium p-2 ">Form $5.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-full ">
                                        {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                        <div className="card card-compact bg-[#D4ECC1]  shadow-xl">
                                            <figure><img className="relative" src={'https://i.ibb.co/tZQVn6m/pngegg-5.png'} alt="Shoes" /></figure>
                                            <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                                <p className="px-8 py-2 bg-[#BEB996] rounded-full  text-center text-xl font-bold ">25% OFF</p>
                                            </div>
                                            <div className="card-body text-center ">
                                                <h2 className="text-3xl font-bold text-center text-[#333333] p-2 uppercase">banana gush</h2>
                                                <p className="text-lg text-[#BEB996] font-medium p-2 ">Form $6.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-full ">
                                        {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                        <div className="card card-compact bg-[#D4ECC1]  shadow-xl">
                                            <figure><img className="relative" src={'https://i.ibb.co/k1NvhW4/pngegg-4.png'} alt="Shoes" /></figure>
                                            <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                                <p className="px-8 py-2 bg-[#BEB996] rounded-full  text-center text-xl font-bold ">15% OFF</p>
                                            </div>
                                            <div className="card-body text-center ">
                                                <h2 className="text-3xl font-bold text-center text-[#333333] p-2 uppercase">fanta</h2>
                                                <p className="text-lg text-[#BEB996] font-medium p-2 ">Form $10.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-full ">
                                        {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                        <div className="card card-compact bg-[#D4ECC1]  shadow-xl">
                                            <figure><img className="relative " src={'https://i.ibb.co/SxrLmSJ/pngegg-9.png'} alt="Shoes" /></figure>
                                            <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                                <p className="px-8 py-2 bg-[#BEB996] rounded-full  text-center text-xl font-bold ">20% OFF</p>
                                            </div>
                                            <div className="card-body text-center ">
                                                <h2 className="text-3xl font-bold text-center text-[#333333] p-2 uppercase">coca-cola</h2>
                                                <p className="text-lg text-[#BEB996] font-medium p-2 ">Form $12.00</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="  bg-white rounded-lg md:pl-40 px-4 md:px-14 py-10 text-gray-500  border md:col-span-3">
                                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3 uppercase">PepsiCo range of foods and beverages reflects</h5>
                                <hr />
                                <h1 className="font-bold text-3xl md:text-4xl  lg:text-6xl py-3 uppercase">Special OFFER</h1>
                                <hr />
                                <h4 className="text-xl font-semibold text-gray-400 pt-4">
                                NOSH's database currently features 2000+ food brands. To find a brand and learn more about them, enter the brand name into the box below.
                                </h4>
                                <button className="bg-white text-gray-500 outline-none mt-5  border transition duration-300 delay-150 hover:delay-300	 rounded-full py-2 px-4 text-md">View All Products</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offer;