import React from 'react'

function AboutTeam({teamMembers}) {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-8 text-center'>Meet the Team</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                {teamMembers.map((member, index) => (
                    <div key={index} className='bg-white rounded-lg p-6'>
                        <img src={member.imageUrl} alt={member.name} className='w-24 h-24 rounded-full object-cover mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>{member.name}</h3>
                        <p className='text-gray-600 mb-2'>{member.role}</p>
                        <p className='text-gray-700'>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutTeam
