
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // const name = e.target.name.value
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password= form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(email, password, name, photo)
        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })


    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Register your account</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Your Name</span>
                                </label>
                                <input type="text" 
                                name="name"
                                placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Photo URL</span>
                                </label>
                                <input type="text" 
                                name="photo"
                                placeholder="Enter your URL" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Email</span>
                                </label>
                                <input type="email" 
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Password</span>
                                </label>
                                <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account ? Go to <Link className="text-blue-700 font-semibold" to='/login'>Login</Link> </p>
                        </form>
                        
                    </div>


            
        </div>
    );
};

export default Register;