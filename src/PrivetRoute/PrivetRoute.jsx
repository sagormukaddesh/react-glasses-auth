import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth();
   
    
    if(loading) return <h1 className="text-5xl">Loading</h1>


    if(!user?.email){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivetRoute;