

const Beverage = () => {
    return (
        <div className="bg-img">
            <div  data-aos="zoom-in" className="max-w-7xl mx-auto px-4 md:px-4 my-10 ">
                <div className="flex justify-center items-center flex-col ">
                    <img className="w-[100px] text-center" src="https://i.ibb.co/7z56DX7/separate.png" alt="" />
                    <h1 className=" text-2xl md:text-4xl font-bold uppercase text-gray-500">most popular Beverage</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-4 ">

                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/Fw4M09C/beverage-4.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Mojito</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/yRsL1hN/beverage-2.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Coffee</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/mSRrjMF/beverage-1.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Milkshake</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/DQtMFBD/beverage-5.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Slushy</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/myy65mX/beverage-6.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Hot Chocolate</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/tKJGz27/beverage-7.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Smoothie</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/pnhWTsv/beverage-8.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Coffee</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col hover:shadow ">
                        <img className="rounded shadow w-4/5" src="https://i.ibb.co/Hr3tBWm/beverage-3.jpg" alt="" />
                        <h1 className="p-4 text-3xl text-gray-400 font-medium">Boba Drinks</h1>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Beverage;