import { useState } from "react";
import { useEffect } from "react";


const Brand = () => {
    const [brands, setBrands] = useState([])
    console.log(brands);

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])



    return (
        <div className="max-w-7xl mx-auto px-4 md:px-4">
            <div className="my-4 py-4 ">
                <div className="flex justify-center items-center flex-col">
                    <img className="w-[100px] text-center" src="https://i.ibb.co/7z56DX7/separate.png" alt="" />
                    <h1 className=" text-2xl md:text-4xl font-bold uppercase text-gray-500">Our Popular Brand</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
                {
                    brands.map(brand => (
                        <li className="shadow-md rounded-md  text-center hover:bg-[#F5F6FB] p-2 flex items-center justify-center" key={brand.id}>
                            <div>
                                <img className="w-[150px]" src={brand.img} alt="" />
                                <h1 className="p-5 text:2xl md:text-3xl text-gray-500 font-bold">{brand.brand_name}</h1>
                            </div>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default Brand;