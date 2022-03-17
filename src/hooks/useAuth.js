import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { useContext } from 'react';
// get all the firebase configuration using useAuth
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;