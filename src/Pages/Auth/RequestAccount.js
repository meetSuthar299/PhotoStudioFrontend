import React, { useState } from 'react'

function RequestAccount() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = () => {
        // Add your login logic here
    };
    return (
        <section id='requestAccount' className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white px-5 py-10 rounded-lg shadow-md w-80'>
                <h1 className='text-3xl font-semibold mb-4 text-center py-2'>Request an Account</h1>
                <form className='flex flex-col gap-4'>
                    <label className='text-gray-600'>First Name:</label>
                    <input 
                        type='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='border border-gray-300 rounded-md p-2'
                    />
                    <label className='text-gray-600'>Last Name:</label>
                    <input
                        type='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='border border-gray-300 rounded-md p-2'
                    />
                    <label className='text-gray-600'>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-gray-300 rounded-md p-2'
                    />
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className='btn text-white rounded-md py-2 px-4 hover:scale-105 transition duration-300'
                    >
                        Request Account
                    </button>
                </form>
                <p className='text-gray-600 text-center mt-4'>
                    Already have an account? <a href='/login/' className='text-primary hover:font-bold'>Login here</a>
                </p>
            </div>
        </section>
    )
}

export default RequestAccount
