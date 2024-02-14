import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
    };

    return (
        <section id='login' className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white px-5 py-10 rounded-lg shadow-md w-96'>
                <h1 className='text-3xl font-semibold mb-4 text-center py-2'>Member Login</h1>
                <form className='flex flex-col gap-4'>
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
                        type="button" 
                        onClick={handleLogin}
                        className='btn text-white rounded-md py-2 px-4 hover:scale-105 transition duration-300'
                    >
                        Login
                    </button>
                </form>
                <p className='text-gray-600 text-center mt-4'>
                    Don't have an account? <a href='/requestAccount/' className='text-primary hover:font-bold'>Request one here</a>
                </p>
            </div>
        </section>
    );
}

export default Login;
