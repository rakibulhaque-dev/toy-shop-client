import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import googleSign from '../../assets/images/gallary/google.png'
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('')

    const { signIn, signInGoogle, setUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    console.log('from', from)

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user) {
                    navigate(from, { replace: true })
                    setUser(user)
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                navigate(from, { replace: true })
                console.log(loggedUser)

                // TODO: jwt 
                // fetch('https://eleven-toy-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(loggedUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         localStorage.setItem('car-access-token', data.token)
                //         navigate(from, { replace: true })

                //     })

            })
            .catch(error => setError(error.message))
    }

    return (
        <>

            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content lg:flex-row">
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-secondary">Login</h1>
                            {/* form here  */}
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <Link href="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                    <div className='text-red-600'>
                                        {
                                            error ? <p>{error}</p> : ''
                                        }
                                    </div>
                                </div>
                                <div className="mt-6 form-control">
                                    <input type='submit' value="Login" className="btn btn-secondary" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New User ? <Link className='font-bold text-secondary' to='/signup'>Sign Up</Link></p>

                            {/* Login Google  */}
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">

                                    <Link>
                                        <img onClick={handleGoogle} src={googleSign} alt="" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Login;