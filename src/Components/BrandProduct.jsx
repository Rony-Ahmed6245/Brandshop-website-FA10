import { useLoaderData, useParams } from "react-router-dom";
import FilterBrandProduct from "./FilterBrandProduct";

const BrandProduct = () => {
    const data = useLoaderData()
    const { brand_name } = useParams();
    const filterData = data?.filter(item => item.brandName === brand_name);

    return (
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
                    <div className="h-screen w-full flex justify-center items-center">
                        <h1 className="text-3xl text-black">No data found</h1>
                    </div>
                )
            }
        </div>
    );
};

export default BrandProduct;
