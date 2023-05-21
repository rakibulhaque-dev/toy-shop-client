import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const [error, setError] = useState()
    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const person = form.photoURL.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const user = { name, email, password, confirm }
        console.log(user)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(error=>setError(error))
    }
    

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="hero-content">
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center text-secondary">Sign In</h1>
                        {/* form here  */}
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                    <input type="text" placeholder="Photo URL here..." name='photoURL' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                    <input type="password" placeholder="confirm password" name='confirm' className="input input-bordered" required />
                            </div>
                            <div className="mt-6 form-control">
                                <input type='submit' value="Sign Up" className="btn btn-secondary" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Have an account? <Link className='font-bold text-secondary' to='/login'>Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;