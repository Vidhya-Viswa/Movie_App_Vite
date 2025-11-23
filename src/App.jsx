import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { WatchListProvider } from './context/WatchListContext';

function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/your-hero-movie-backdrop.jpg')" }}> {/* Add a dynamic backdrop, e.g., from TMDB */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay for readability */}
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/watchlist' element={<Watchlist />} />
            </Routes>
          </motion.div>
        </div>
      </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;