import React from 'react'

function PageBanner({text , backgroundImage}) {
    return (
        <div className='relative bg-cover bg-center flex flex-col items-center justify-center py-40' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute inset-0 bg-slate-900 opacity-70'></div>
            <h1 className='text-3xl lg:text-5xl text-white text-center z-10 relative mx-auto'>
                {text}
            </h1>
        </div>
    )
}

export default PageBanner
