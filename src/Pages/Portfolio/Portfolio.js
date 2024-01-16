import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  getProjects,
  selectIsLoading,
  selectProjects,
} from "../../redux/Project/projectSlice";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

function Portfolio() {
  // const dispatch = useDispatch();
  // const projects = useSelector(selectProjects);

  // useEffect(() => {
  //   dispatch(getProjects());
  // }, [dispatch]);

  // const isLoading = useSelector(selectIsLoading)

  return (
    <motion.section
      key={'portfolio'}
      className="bg-slate-300 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Exciting Things Are Coming!</h2>
        <p className="text-lg mb-8">We are working hard to bring you something amazing. Stay tuned for updates!</p>
        <div className="flex justify-center">
          {/* You can add a countdown timer, subscribe form, or other elements here */}
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio
