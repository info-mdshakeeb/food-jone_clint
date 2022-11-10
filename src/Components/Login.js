import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hook/AlartMessage';
import useTitle from '../Hook/useTitile';

const Login = () => {
    useTitle("login")
    const { successMessage, errorMessage } = AlartMessage()
    const { googlelogin, setUser, loginWithEmail, setloading } = useContext(authUser)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const loginWithGoogle = () => {
        setloading(true)
        googlelogin()
            .then(rs => {
                const user = rs.user
                const currentUser = {
                    email: user.email
                }
                setUser(rs.user)
                //get jwt token
                fetch('https://food-zone-server-itzshakeeb.vercel.app/login', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json()).then(data => {
                    localStorage.setItem('Login-Token', data.token)
                })
                successMessage('Login Success')
                navigate(from, { replace: true })
            })
            .catch(er => errorMessage(er.message))
    }
    const heandelLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        setloading(true)

        loginWithEmail(email, pass)
            .then(re => {
                const user = re.user
                const currentUser = {
                    email: user.email,
                }
                setUser(re.user)
                form.reset()
                //get jwt token
                fetch('https://food-zone-server-itzshakeeb.vercel.app/login', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json()).then(data => {
                    localStorage.setItem('Login-Token', data.token)
                })

                successMessage('login succesFull 9;')
                navigate(from, { replace: true })
            })
            .catch(er => errorMessage(er.message))
    }
    return (
        <div className="pt-20 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now! for get access</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={heandelLogin} action="">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='pass' className="input input-bordered" />
                                <div className="flex justify-between items-center">
                                    <button className='btn btn-primary my-3 w-2/3'>Login</button>
                                    <div className="ml-5">Or</div>
                                    <div className="flex w-full">
                                        <p className='mx-3 cursor-pointer text-3xl' onClick={loginWithGoogle} >G</p>

                                    </div>
                                </div>
                                <small>Dont have Accout go <Link to='/Register' className='link link-hover text-teal-400'> Registation </Link> Page</small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;