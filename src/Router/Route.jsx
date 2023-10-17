
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct';
// import ErrrorPage from '../Components/ErrrorPage';
import MainLayout from '../Components/MainLayout';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';

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
        ]
    }
])
export default myRoute;