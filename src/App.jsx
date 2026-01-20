import { Routes, Route } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';

import Home from './pages/Home';
import Watch from './pages/Watch';
import WatchList from './pages/WatchList';
import './index.css'
import "./styles/swiper.css";

function App() {

  return (
    <div className='bg-black from-tide-abyss via-tide-deep to-black text-white'>
      <PlayerProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watch' element={<Watch />} />
            <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </PlayerProvider>
    </div>
  );
}

export default App
