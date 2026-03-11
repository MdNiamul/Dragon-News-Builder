import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOut/HomeLayOut/HomeLayout";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CataoryNews/CatagoryNews";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import AuthLayout from "../LayOut/AuthLayout/AuthLayout";
import NewsDetails from "../Pages/News-Details";
import PrivateRoutte from "./Privateroute/PrivateRoutte";
import Loading from "../Component/Loading/Loading";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/catagory/:id",
                element: <CatagoryNews></CatagoryNews>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            },

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoutte><NewsDetails></NewsDetails></PrivateRoutte>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h2>Error</h2>
    }
])

export default router;
