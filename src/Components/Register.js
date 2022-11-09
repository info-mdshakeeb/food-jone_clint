import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hook/AlartMessage';
import useTitle from '../Hook/useTitile';

const Register = () => {
    useTitle("Resister")
    const { successMessage, errorMessage } = AlartMessage()
    const { createUser, setUserNAme, varifymail, setloading } = useContext(authUser);
    const navigate = useNavigate()

    const heandelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.username.value;
        const pass = form.pass.value;
        const url = form.photourl.value;
        const user = { name, email, pass, url }
        setloading(true)

        fetch('http://localhost:2100/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        createUser(email, pass)
            .then(rs => {
                setUserNAme(name, url)
                    .then(re => {
                        varifymail()
                            .then(rs => {
                                successMessage('Account Created')
                                navigate('/')
                            })
                    })
            })
            .catch(er => errorMessage(er.message))
    }
    return (
        <form onSubmit={heandelRegister} className="mt-20 h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-2 text-green-400">Register now !</h1>
                    <p>Give All the nessesarry information for registet & ready to go</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Usrname</span>
                            </label>
                            <input type="text" placeholder="username" name='username' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="url" name='photourl' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control  mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='pass' className="input input-bordered" />
                            <small className=' text-red-500 pt-2' ></small>
                        </div>

                        <small>Alreay have account go
                            <Link to='/login' className='link link-hover text-teal-400'> Login
                            </Link> Page
                        </small>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;