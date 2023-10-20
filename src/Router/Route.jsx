
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct';
import MainLayout from '../Components/MainLayout';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Login from '../Components/Login';
import Register from '../Components/Register';
import PrivateRoute from './PrivateRoute';
// import ErrorPage from '../Pages/ErrorPage';
import BrandProduct from '../Components/BrandProduct';
// import DetailPage from '../Pages/DetailCard';
import DetailCard from '../Pages/DetailCard';

const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        // errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("https://brand-server.vercel.app/products"),
            },
            {
                path:'/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path:'/cart',
                element:<Cart></Cart>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            }
            ,
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/products/:brand_name',
                element:<BrandProduct></BrandProduct>,
                loader: () => fetch("https://brand-server.vercel.app/products"),
            },
            {
                path:'/detailcard/:id',
                element:<PrivateRoute><DetailCard/></PrivateRoute>,
               loader:()=> fetch('https://brand-server.vercel.app/products')
            }
           
            
        ]
    }
])
export default myRoute;