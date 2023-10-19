

const FilterBrandProduct = ({ brand }) => {
    console.log(brand);
    const { photo, name, textarea, price, } = brand

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 my-10">
            <div className=" border rounded-none">
                <figure><img src="https://i.ibb.co/yRsL1hN/beverage-2.jpg" alt="Shoes" /></figure>
                <div className="p-4 ">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl text-gray-500" >{name}</h2>
                        <h1 className="text-xl bg-[#2B3440] px-4  rounded-full text-white">Price:{price}</h1>
                    </div>
                    <p className="text-gray-400">{textarea}</p>
                    <div className=" flex justify-between items-center mt-2">
                        <button className="bg-white shadow-md  px-2 py-1 ">View Details</button>
                        <button className="bg-white shadow-md  px-2 py-1 ">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBrandProduct;