import { Link } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location in the login page', location)
    const handleLogin = e =>{
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email,password)
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        // console.log(form.get('email'))
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        //Log In
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please Login</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" 
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not have an account ? <Link className="text-blue-700 font-semibold" to='/register'>Register</Link> </p>
                        </form>
                        
                    </div>


            
        </div>
    );
};

export default Login;