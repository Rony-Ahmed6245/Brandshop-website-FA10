
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct';
// import ErrrorPage from '../Components/ErrrorPage';
import MainLayout from '../Components/MainLayout';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Login from '../Components/Login';
import Register from '../Components/Register';

const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        // errorElement:<ErrrorPage></ErrrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>,
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
            }
        ]
    }
])
export default myRoute;