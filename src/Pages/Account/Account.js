import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import PageBanner from '../../Components/PageBanner';
import { shortenText } from '../../helpers/functions';
import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from "../../redux/Auth/AuthSlice";
import ShowOnLogin from '../../helpers/hiddenLink';

export const UserName = ({ long }) => {
    const user = useSelector(selectUser);
    const username = user?.name || "...";

    return (
        <span style={{ color: "var(--color-danger)" }}>Hi, {long ? username : shortenText(username, 5)}</span>
    );
};

function Account() {
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

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <motion.section
            className='section min-h-screen bg-gray-100'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
        >
            {isLoggedIn ? (
                <>
                    <PageBanner
                        text={<UserName long={true} />}
                    />
                    <div id='' className='pt-10'>
                        <div className="flex flex-col items-center justify-center lg:px-20 md:px-10 px-10 py-10">
                            <h1 className="text-4xl text-black text-center py-10">Welcome to your account</h1>
                            <p className="text-lg lg:text-xl font-light text-black text-center">
                                You can manage your account details here.
                            </p>
                            <p className="text-lg lg:text-xl font-light text-black text-center">
                                Coming soon...
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <PageBanner
                        text={"Not logged in"}
                    />
                    <h1 className="flex flex-col items-center justify-center py-20 text-2xl">Please login to see this page</h1>
                </>
            )}
        </motion.section>

    );
}

export default Account;
