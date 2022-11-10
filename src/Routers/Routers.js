import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService";
import Blog from "../Components/Blog";
import Editreview from "../Components/Editreview";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Myreviews from "../Components/Myreviews";
import Register from "../Components/Register";
import Services from "../Components/Services";
import ServicesDetails from "../Components/ServicesDetails";
import Layout from "../Layout/Layout";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("https://food-zone-server.vercel.app/serviceSection")
            },
            {
                path: '/home', element: <Home />,
                loader: () => fetch("https://food-zone-server.vercel.app/serviceSection")
            },
            {
                path: '/Services', element: <Services />,
                loader: () => fetch('https://food-zone-server.vercel.app/Services')
            },

            { path: '/Blog', element: <Blog /> },
            { path: '/login', element: <Login /> },
            { path: '/Register', element: <Register /> },
            {
                path: '/services/:id',
                element: <ServicesDetails />,
                loader: ({ params }) => fetch(`https://food-zone-server.vercel.app/services/${params.id}`)
            },
            { path: '/myreviews', element: <PrivateRoutes><Myreviews /></PrivateRoutes> },
            { path: '/addservices', element: <PrivateRoutes><AddService /></PrivateRoutes> },
            {
                path: '/myreviews/edit/:_id',
                element: <Editreview />,
            }
        ]
    },
    { path: "*", element: <p className="text-center mt-10">rong router</p> }
])