import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen w-full flex-col">
                <img src="https://i.ibb.co/dMF4zCM/pngegg-10.png" alt="" />
                <h1 className="text-4xl font-bold">Page is no found</h1>
                <Link className="text-red-400 underline text-2xl" to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;