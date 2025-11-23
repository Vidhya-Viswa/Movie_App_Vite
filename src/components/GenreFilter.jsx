import React from 'react';
import { motion } from 'framer-motion';

const GenreFilter = ({ genreList, setSelectedGenre }) => {
  return (
    <motion.select
      className='p-3 mb-4 bg-gray-800 bg-opacity-80 backdrop-blur-md text-white border border-red-600 rounded-lg focus:ring-2 focus:ring-red-500'
      onChange={(e) => setSelectedGenre(e.target.value)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </motion.select>
  );
};

export default GenreFilter;