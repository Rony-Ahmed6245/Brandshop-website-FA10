import Swal from "sweetalert2";


const handelAddproduct = e => {
    e.preventDefault();

    const form = e.target;
    const photo = form.img.value;
    const name = form.name.value;
    // const brandName = form.brandName.value;
    const price = form.price.value;
    const textarea = form.textarea.value;
    const rating = form.rating.value;
    const brandName = form.brand_type.value;



    console.log(photo, name, brandName, price, textarea, rating,);
    const formData = { photo, name, brandName, textarea, price, rating }

    fetch("https://brand-server-q8uf2nlj1-ronyahmeds-projects.vercel.app/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Wow! Product successfully added.',
                })
            }

        });
    form.reset();
};



const AddProduct = () => {




    return (
        <div>
            <div className=" max-w-7xl mx-auto h-screen ">
                <div className=" w-full flex justify-center items-center my-10">
                    <div className="shadow md:w-3/5 rounded-lg">
                        <h1 className="text-2xl font-bold text-gray-400 mt-4 text-center">Add Products</h1>
                        <form onSubmit={handelAddproduct} className="card-body px-4 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <input type="text" placeholder="Name" name='name' className="input w-full input-bordered rounded-md" required />
                                </div>
                                <div className="form-control">
                                <input type="text" placeholder="Photo" name='img' className="input w-full input-bordered rounded-md" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                               
                                <div className="form-control">
                                <input type="text" placeholder="Rating" name='rating' className="input input-bordered rounded-md my-4" required />
                            </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Price" name='price' className="input input-bordered rounded-md my-4" required />
                                </div>
                            </div>
                            <div className="form-control border-2  text-gray-400 rounded-md">
                                    <label className="border-b-2 p-4">Brand name</label>
                                    <select id="brand-type" name="brand_type">
                                        <option value="Pepsico">Pepsico</option>
                                        <option value="Coca-cola">Coca-cola</option>
                                        <option value="Mountain_dew">Mountain_dew</option>
                                        <option value="Starbucks">Starbucks</option>
                                        <option value="Nestle">Nestle</option>
                                        <option value="Pepsi">Pepsi</option>
                                    </select>
                                </div>
                            <div className="form-control pt-2">
                                <textarea className="border outline-none p-4 rounded-md" name="textarea" placeholder="Sort Description" id="" cols="15" rows="5"></textarea>
                            </div>
                            
                            <div className="flex justify-center">
                                <button className="btn bg-[#79C23F] hover:text-gray-500 px-8 rounded-md text-white uppercase">Add product</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;