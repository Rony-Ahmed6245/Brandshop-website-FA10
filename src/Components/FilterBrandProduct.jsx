

const FilterBrandProduct = ({brand}) => {
console.log(brand);
    const { photo, name, brandName, textarea, price, rating } = brand

    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default FilterBrandProduct;