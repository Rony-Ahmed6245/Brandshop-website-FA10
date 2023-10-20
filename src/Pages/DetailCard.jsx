import { Rating } from "@mui/material";
import { useLoaderData, useParams } from "react-router-dom";


const DetailCard = () => {
    const data = useLoaderData();
    console.log(data);

    const { id } = useParams()
    console.log(id);


    const products = data.find((item) => item._id === id);
    console.log(products);
    const { rating
        , photo, name, brandName, textarea } = products || {}

    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="max-h-screen">
                <div className="card lg:card-side border shadow-lg p-4">
                    <figure><img className="w-[300px]" src={photo} alt="Album" /></figure>
                    <div className="card-body border-l-2">
                        <h2 className="text-gray-500 text-4xl font-bold uppercase">{name}</h2>
                        <p className="text-xl text-gray-400">{textarea}</p>
                        <h2 className="  text-2xl  uppercase rounded-full">Brand: {brandName}</h2>
                        <Rating name="size-medium" defaultValue={rating} />
                        <div className="card-actions justify-end">
                            <button className="py-1 px-3 border rounded text-xl font-bold uppercase ">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;