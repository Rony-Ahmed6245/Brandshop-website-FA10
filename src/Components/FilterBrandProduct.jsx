
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const FilterBrandProduct = ({ brand }) => {
    // console.log(brand);
    const { _id, photo, name, textarea, price, rating } = brand;
    console.log(_id);


    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 my-10">
            <div className="card shadow-lg border rounded flex flex-col h-full">
                <figure><img className="" src={photo} alt="Shoes" /></figure>
                <div className="card-body p-4" style={{ flex: 1 }}>
                    <div className="flex justify-between items-center pb-2">
                        <h2 className="text-md font-bold text-gray-500">{name}</h2>
                        <h1 className="text-sm bg-[#2B3440] px-4 rounded-full text-white">Price: {price}TK</h1>
                    </div>
                    <p className="text-gray-400">{textarea}</p>
                    <Rating name="size-medium" defaultValue={rating} />
                    <div className="flex justify-between items-center mt-2">
                        <Link to={`/detailcard/${_id}`}><button className='py-1 px-3 uppercase font-bold border rounded-md'>details</button></Link>
                       <Link to={`/updatedProduct/${_id}`}> <button className="border rounded-md uppercase font-bold px-2 py-1">Update</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FilterBrandProduct;
