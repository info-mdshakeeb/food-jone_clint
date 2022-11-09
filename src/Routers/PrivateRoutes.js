import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authUser } from "../Context/UserContext";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authUser);
    const location = useLocation();
    if (loading) {
        return <p>loading.....</p>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoutes;