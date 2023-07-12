import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from '../pages/Login'
import Signup from "../pages/Signup";
import HomePage from "../pages/HomePage";
import Page404 from "../pages/Page404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/Signup',
                element: <Signup />
            },
            {
                path: '/Home',
                element: <HomePage />
            }
        ],
        errorElement: <Page404 />
    }
])

export default router;
