import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOut/HomeLayOut/HomeLayout";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CataoryNews/CatagoryNews";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {path: "",
            element: <Home></Home>},
            {path: "/catagory/:id",
            element: <CatagoryNews></CatagoryNews>,
            loader: () => fetch('/news.json')
        },

        ]
    },
    {
        path: '/auth',
        element: <h2>Authinication here </h2>
    },
    {
        path: '/news',
        element: <h2>news Layout</h2>
    },
    {
        path: '/*',
        element: <h2>Error</h2>
    }
])

export default router;