import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Myreviews from "../Components/Myreviews";
import Register from "../Components/Register";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import ServicesDetails from "../Components/ServicesDetails";
import Layout from "../Layout/Layout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("http://localhost:2100/serviceSection")
            },
            {
                path: '/home', element: <Home />,
                loader: () => fetch("http://localhost:2100/serviceSection")
            },
            {
                path: '/Services', element: <Services />,
                loader: () => fetch('http://localhost:2100/Services')
            },
            {
                path: '/Reviews', element: <Reviews />,
                loader: () => fetch('http://localhost:2100/reviews')
            },
            { path: '/Blog', element: <Blog /> },
            { path: '/login', element: <Login /> },
            { path: '/Register', element: <Register /> },
            {
                path: '/services/:id',
                element: <ServicesDetails />,
                loader: ({ params }) => fetch(`http://localhost:2100/services/${params.id}`)
            },
            { path: '/myreviews', element: <Myreviews /> }
        ]
    },
    { path: "*", element: <p>rong router</p> }
])