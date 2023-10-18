
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct';
import MainLayout from '../Components/MainLayout';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Login from '../Components/Login';
import Register from '../Components/Register';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/ErrorPage';

const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("http://localhost:5000/products"),
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
            
        ]
    }
])
export default myRoute;