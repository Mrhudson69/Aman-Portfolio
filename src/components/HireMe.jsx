import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  const handleClick = () => {
    const email = personalInfo.email;
    const userAgent = navigator.userAgent.toLowerCase();

    // Check if the user is on a mobile device
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

    if (isMobile) {
      // If on mobile, open with Gmail app
      window.location.href = `mailto:${email}`;
    } else {
      // If on desktop/laptop, open Gmail in the browser
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    }
  };

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
        <button
          onClick={handleClick}
          className="flex justify-center items-center absolute left-4 top-4 green-pink-gradient w-16 h-16 rounded-full"
        >
          <span className="text-white text-[14px] p-1 font-normal">Hire Me</span>
        </button>
      </div>
    </motion.div>
  );
};

export default HireMe;
