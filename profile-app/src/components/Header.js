import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-8 sm:py-10 lg:py-12 text-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:animate-gradient hover:shadow-2xl"
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 dark:from-yellow-400 dark:to-yellow-300">
        Bruno Carvalho
      </h1>
      <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 mt-2 font-medium">
        Developer & Tech Enthusiast
      </p>
    </motion.header>
  );
};

export default Header;
