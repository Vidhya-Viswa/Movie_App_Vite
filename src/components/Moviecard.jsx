import React, { useContext } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { WatchListContext } from '../context/WatchListContext';

const Moviecard = ({ movie }) => {
  const { watchList, toggleWatchList } = useContext(WatchListContext);
  const inWatchList = watchList.some((m) => m.id === movie.id);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-90 p-4 rounded-lg shadow-lg text-white relative overflow-hidden h-96 flex flex-col'  
      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(255, 71, 87, 0.4)' }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className='w-full h-64 object-cover rounded-md mb-2 flex-shrink-0'  // Fixed h-64 (256px) and flex-shrink-0 to prevent shrinking
      />
      <h3 className='text-lg font-bold mb-1 truncate'>{movie.title}</h3>  // Added truncate to cut off long titles
      <p className='text-sm text-gray-400 mb-2'>{movie.release_date}</p>
      <div className='flex items-center mb-3'>
        <FaStar className='text-yellow-500 mr-1' />
        <span>{movie.vote_average?.toFixed(1) || 'N/A'}/10</span>
      </div>
      <button className='absolute top-2 right-2 text-red-500 text-xl hover:text-red-400 transition-colors' onClick={() => toggleWatchList(movie)}>
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
      <button className='w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors mt-auto'>View Details</button>  // Added mt-auto to push button to bottom
    </motion.div>
  );
};

export default Moviecard;