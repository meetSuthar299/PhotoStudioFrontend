import { motion } from 'framer-motion';
import React from 'react';
import { Members } from '../../Components/MembersData';
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: 'linear', duration: 1, delay: 0.2 }}
      className="about-us"
    >
      <img
        className="poster"
        src="https://images.unsplash.com/photo-1613052182267-ea06867f2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt="about us poster"
      />
      <div className="info">
        <h1>
          Hello! I'm <span>Emre Ates</span> the CEO of a Corestudio Photography
        </h1>
        <p>
          Corestudio, which was established in 2020, has taken part in many
          events and organizations, has a professional team and is here for you.
        </p>
        <h1 className="team-text">Our Team</h1>
        <div className="our-team">
          {Members.map((item) => (
            <div className="member" key={item.id}>
              <img className="member-image" src={item.imgSrc} alt="" />
              <h2>{item.name}</h2>
              <h3>Photographer</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
