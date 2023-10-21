
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Updated = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const product = data.find((item) => item._id == id);
    const { _id, rating, photo, name, brandName, textarea, price } = product || {};

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedProduct = {
            photo: form.img.value,
            name: form.name.value,
            price: form.price.value,
            textarea: form.textarea.value,
            rating: form.rating.value,
        };

        fetch(`https://brand-server.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
        .then((res) => res.text()) // Change to res.text() to see the response content as text
        .then((data) => {
            console.log(data); // Log the response to the console
        });
        

        form.reset();
    };

    return (
        <div className="max-w-7xl mx-auto h-screen">
            <div className="w-full flex justify-center items-center my-10">
                <div className="shadow border md:w-3/5 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-400 mt-4 text-center uppercase">
                        Update Product
                    </h1>
                    <form onSubmit={handleUpdateProduct} className="card-body px-4">
                        <h1 className="text-2xl font-bold">Brand: {brandName}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    defaultValue={name}
                                    name="name"
                                    className="input w-full text-gray-500 input-bordered rounded-md"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Photo"
                                    defaultValue={photo}
                                    name="img"
                                    className="input w-full text-gray-500 input-bordered rounded-md"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="form-control">
                                <input
                                    type="number"
                                    placeholder="Rating"
                                    defaultValue={rating}
                                    name="rating"
                                    className="input text-gray-500 input-bordered rounded-md my-4"
                                    min="1"
                                    max="5"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="number"
                                    min="50"
                                    defaultValue={price}
                                    placeholder="Price"
                                    name="price"
                                    className="input text-gray-500 input-bordered rounded-md my-4"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control pt-2">
                            <textarea
                                className="border text-gray-500 outline-none p-4 rounded-md"
                                name="textarea"
                                defaultValue={textarea}
                                placeholder="Short Description"
                                cols="15"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn bg-[#79C23F] hover:text-gray-500 px-8 rounded-md text-white uppercase">
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updated;
