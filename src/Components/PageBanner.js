import React from 'react';
import PropTypes from 'prop-types';

function PageBanner({ text, backgroundImage, links }) {
    return (
        <div className='relative bg-cover bg-center flex flex-col items-center justify-center py-40 sm:py-40 md:py-40' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute inset-0 bg-slate-900 opacity-70'></div>
            <h1 className='text-2xl sm:text-3xl md:text-5xl text-white text-center relative mx-auto mb-4 sm:mb-6'>
                {text}
            </h1>
            <div className='flex flex-row gap-8 text-white z-10 text text-md md:text-lg lg:text-xl'>
                {links?.map((link, index) => (
                    <React.Fragment key={index}>
                        <a href={link.link} className='hover:scale-110 font-thin text-center sm:w-auto transition-all'>
                            <h2>{link.name}</h2>
                        </a>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

PageBanner.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    sectionLinks: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

export default PageBanner;
