// Header.js

import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-8 sm:py-10 lg:py-12 text-center bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-md"
    >
      <h1 className="text-5xl font-extrabold text-white dark:text-gray-200">
        Bruno Carvalho
      </h1>
      <p className="text-xl text-gray-300 dark:text-gray-400 mt-2">Developer</p>
    </motion.header>
  );
};

export default Header;
