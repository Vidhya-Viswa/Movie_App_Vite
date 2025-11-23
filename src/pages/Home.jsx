import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Moviecard from '../components/Moviecard';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=edbb4b883ded835acdbf2936b0cfba58&language=en-US&page=${page}`;
        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=edbb4b883ded835acdbf2936b0cfba58&language=en-US&query=${search}&page=${page}&include_adult=false`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    }, [page, search]);

    return (
        <div className='p-4 pt-10'>

            {/* Hero Section */}
            <motion.section
                className="text-center py-8 mb-4 mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl font-bold mb-4 text-red-500">Discover Blockbusters</h1>
                <p className="text-xl mb-3 text-gray-300">Search and explore the latest hits.</p>
            </motion.section>

            {/* Search Bar */}
            <motion.div
                className="sticky top-4 z-10 flex justify-center w-full"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <input
                    type="text"
                    placeholder='Search Movies...'
                    className='p-3 w-4/5 md:w-2/3 lg:w-1/2 border rounded-lg border-red-600 bg-gray-800 bg-opacity-80 backdrop-blur-md text-white shadow-lg focus:ring-2 focus:ring-red-500'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </motion.div>

            {/* Movie Grid */}
            <motion.div
                className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
                {movies.map(movie => (
                    <motion.div key={movie.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Moviecard movie={movie} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Pagination */}
            <motion.div
                className="pagination-container flex justify-center mt-10 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <button
                    disabled={page === 1}
                    className='px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg transition-colors shadow-lg'
                    onClick={() => setPage(prev => prev - 1)}
                >
                    Previous
                </button>
                <button
                    className='px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg'
                    onClick={() => setPage(prev => prev + 1)}
                >
                    Next
                </button>
            </motion.div>

        </div>
    );
};

export default Home;
