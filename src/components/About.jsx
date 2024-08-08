import React from "react";
import aboutImg from "../assets/about2.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl ">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              width="500"
              height="500"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I'm a creative and detail-oriented software developer with a
              background in software engineering and a strong passion for
              frontend development. My journey in tech has been fueled by a
              desire to blend functionality with aesthetics, ensuring that every
              application I build is not only robust but also user-friendly and
              visually appealing. <br /> <br />
              Over the years, I've honed my skills in React, JavaScript, and
              modern CSS frameworks like MUI and Tailwind CSS. I’ve had the
              opportunity to work on diverse projects, including a mental health
              tracking app that leverages NLP to support cardiac patients and a
              platform dedicated to artists, where I focused on delivering an
              engaging user experience. <br /> <br />
              My approach to development is grounded in Agile methodologies,
              allowing me to work effectively in dynamic, fast-paced
              environments. I believe in the power of collaboration and
              continuous learning, and I'm always excited to explore new
              technologies and ideas. <br /> <br />
              Beyond coding, I'm deeply interested in the intersection of
              technology and entertainment, with aspirations to eventually merge
              my technical skills with my passion for events and production
              management. For now, I’m committed to building innovative digital
              solutions that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
