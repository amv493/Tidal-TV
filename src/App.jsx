import { Routes, Route } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';

import Home from './pages/Home';
import Watch from './pages/Watch';
import WatchList from './pages/WatchList';
import './index.css'
import { NavBar } from './components/NavBar';

function App() {

  return (
      <PlayerProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watch' element={<Watch />} />
            <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </PlayerProvider>
  );
}

export default App
