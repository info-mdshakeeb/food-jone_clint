import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authUser } from "../Context/UserContext";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authUser);
    const location = useLocation();
    if (loading) {
        return <div className="flex h-screen items-center ">
            <p className="text-center w-full">loading.....</p>
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoutes;