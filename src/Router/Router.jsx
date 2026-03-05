import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h2>Home</h2>
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