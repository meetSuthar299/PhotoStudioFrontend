import React from 'react'
import FlipCard from '../../Components/FlipCard'

function Testimonials({ reviews }) {
    return (
        <div id='testimonials' className='py-36 px-10 md:px-20'>
            <h2 className='flex text-3xl lg:text-4xl font-bold text-center pb-10'>What Our Customers Say</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {reviews?.map((review, index) => (
                    <FlipCard key={index}
                        title={review.name}
                        frontData={{
                            // icon: <FaCar />,
                            // img: Auto1 
                        }}
                        backData={{
                            paragraph: review.review
                        }}
                        size="horizontal"
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials