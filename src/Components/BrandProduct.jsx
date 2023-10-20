import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData, useParams } from "react-router-dom";
import FilterBrandProduct from "./FilterBrandProduct";

const BrandProduct = () => {
    const data = useLoaderData()
    const { brand_name } = useParams();
    // const filterData = data?.filter(item => item.brandName === brand_name);

    const filterData = Array.isArray(data)
        ? data.filter(item => item.brandName === brand_name)
        : [];
    return (
        <div>
            
{/* 
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                {filterData.map(brand => (
                        <div key={brand._id}>
                            <img className="w-[200px]" src={brand.photo} alt={brand.name} />
                        </div>
                    ))}
                </div>
            </div> */}



            {/* filter brand product  */}
            <div>
                {
                    filterData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {
                                filterData.map(brand => (
                                    <FilterBrandProduct key={brand._id} brand={brand} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="h-screen w-full flex flex-col justify-center items-center">
                            <h1 className="text-3xl uppercase ">Product not Available</h1>
                            <Link to='/addProduct'><button className="text-xl underline ">Please Add Product</button></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandProduct;
