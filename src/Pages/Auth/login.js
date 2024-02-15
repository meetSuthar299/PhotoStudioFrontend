import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../Components/Loader'
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { RESET_AUTH, login } from "../../redux/Auth/AuthSlice";
import { validateEmail } from "../../redux/Auth/AuthService";
import { NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Login() {
    // scroll to the top when the page loads
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isLoggedIn, isLoading, isSuccess } = useSelector(
        (state) => state.auth
    );

    // check if there is a redirect query in the url
    const [urlParams] = useSearchParams();
    const redirect = urlParams.get("redirect");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("All fields are required");
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }
        const userData = {
            email,
            password,
        };
        // console.log(userData);
        await dispatch(login(userData));
    };

    // 
    useEffect(() => {
        if (isLoggedIn && isSuccess) {
            navigate("/");
        }
        dispatch(RESET_AUTH());
    }, [isSuccess, isLoggedIn, navigate, dispatch]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            id='login' className='section flex flex-col items-center justify-center h-screen bg-gray-100'>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <div className='bg-white px-5 py-10 rounded-lg shadow-md w-96'>
                        <h1 className='text-3xl font-semibold mb-4 text-center py-2'>Member Login</h1>
                        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                            <label className='text-gray-600'>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border border-gray-300 rounded-md p-2'
                            />
                            <label className='text-gray-600'>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='border border-gray-300 rounded-md p-2'
                            />
                            <button
                                type="submit"
                                className='btn text-white rounded-md py-2 px-4 hover:scale-105 transition duration-300'
                            >
                                Login
                            </button>
                        </form>
                        <p className='text-gray-600 text-center mt-4'>
                            Don't have an account?
                            <NavLink to='/requestAccount/' className='text-primary hover:font-bold'>
                                Request one here
                            </NavLink>
                        </p>
                    </div>
            }

        </motion.section>
    );
}

export default Login;
