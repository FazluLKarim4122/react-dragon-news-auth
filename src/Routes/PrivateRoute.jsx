import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user ,loading}= useContext(AuthContext)
    // jodi login kora na thake tahole News page er read more theke login korle amader kothao na niye oi login page ei rekhe dey, but amra chai jei location e jaoar kotha silo shei location e jno niye jay after login-er jonno ki korte hobe
    /**
     * 1. private route er vitor kothay jaite jassilam sheta dhorte hobe useLocation diye
     * 2. Navigate state ney, kajei location.pathname ta state e boshay dei Navigate er moddhe.
     * 3. Now Navigate kore jokhon login page e ashbe, amra login page e useLocation set kore signout korar poreo 1ta state peye jabo, state er moddhe ase kon jaygay jaite nissilo- eta shobshomoy paoa jabe na.
     * 4. then amra login page e useNavigate set kore dibo,then signIn function er vitore .then user create hoar por 1ta conditon diye dibo 
     */
    const location = useLocation()
    console.log(location)
    console.log(location.pathname)
    
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;