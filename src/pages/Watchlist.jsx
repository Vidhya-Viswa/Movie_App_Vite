import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import GenreFilter from '../components/GenreFilter.jsx';
import { WatchListContext } from '../context/WatchListContext.jsx';
import Moviecard from '../components/Moviecard.jsx';

const Watchlist = () => {
    const { watchList, genreList } = useContext(WatchListContext);
    const [search, setSearch] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const filteredMovies = watchList
        .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
        .filter((movie) => !selectedGenre || movie.genre_ids.includes(Number(selectedGenre)));

    return (
        <div className='p-4 pt-20'>
            {/* Enhanced Search Bar */}
            <motion.div
                className="fixed top-20 z-10 flex justify-center w-full"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <input
                    type="text"
                    placeholder='Search Your Watchlist...'
                    className='p-3 w-4/5 md:w-2/3 lg:w-1/2 border rounded-lg border-red-600 bg-gray-800 bg-opacity-80 backdrop-blur-md text-white shadow-lg focus:ring-2 focus:ring-red-500'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </motion.div>

            {/* Centered Filter */}
            <motion.div
                className='mt-20 flex justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
            </motion.div>

            {/* Movie Grid or Empty State */}
            {filteredMovies.length > 0 ? (
                <motion.div
                    className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                >
                    {filteredMovies.map(movie => (
                        <motion.div key={movie.id} whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(255, 71, 87, 0.3)' }} transition={{ duration: 0.2 }}>
                            <Moviecard movie={movie} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <motion.div
                    className="text-center mt-20 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-2xl">No movies in your watchlist yet. Add some!</p>
                </motion.div>
            )}
        </div>
    );
};

export default Watchlist;