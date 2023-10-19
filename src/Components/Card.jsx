import { Link } from "react-router-dom";


const Card = ({brand}) => {




    return (
        <div>
            <Link to={`/products/${brand.brand_name}`}>
                <div className="shadow-md rounded-md  text-center hover:bg-[#F5F6FB] p-2 flex items-center justify-center" >
                    <div>
                        <img className="w-[150px] h-[150px]" src={brand.img} alt="" />
                        <h1 className="p-5 text:2xl md:text-3xl text-gray-500 font-bold">{brand.brand_name}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;