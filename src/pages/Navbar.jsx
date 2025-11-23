import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchListContext } from '../context/WatchListContext';
import { motion } from 'framer-motion'; // For hover effects

const Navbar = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <motion.nav
      className='bg-gray-900 bg-opacity-80 backdrop-blur-lg p-4 text-white flex justify-between fixed w-full top-0 z-20 shadow-lg border-b border-red-600'
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className='text-2xl font-bold text-red-500 hover:text-red-400 transition-colors'>🎥 MovieApp</Link>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/watchlist" className='text-xl hover:text-red-400 transition-colors'>Watchlist ({watchList.length})</Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;