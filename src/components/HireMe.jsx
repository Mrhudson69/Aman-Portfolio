import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-4 right-4 md:flex justify-center items-center"
    >
      <div className="w-24 h-24 relative">
        <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin absolute inset-0"></div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
          className="flex justify-center items-center absolute left-4 top-4 green-pink-gradient w-16 h-16 sm:w-14 sm:h-14 xs:w-12 xs:h-12 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white text-[14px] p-1 font-normal">Hire Me</span>
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;