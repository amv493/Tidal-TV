import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [watchList, setWatchList] = useState([]);
    const [currentEpisode, setCurrentEpisode] = useState(null);

    const navigate = useNavigate();

    const addToWatchList = (show) => {
        setWatchList((prev) => 
            prev.find((s) => s.id === show.id) ? prev : [...prev, show]
        );
    };

    const removeFromWatchList = (id) => {
        setWatchList((prev) => prev.filter((s) => s.id !== id));
    };

    // This function BOTH selects an episode & navigates
    const playNextEpisode = () => {
        console.log("Shuffle clicked");
        
        if (!watchList.length) {
            console.log("Watchlist empty");
            return;
        }

        const playableShows = watchList.filter(
            (show) => Array.isArray(show.episodes) && show.episodes.length > 0
        );

        if (!playableShows.length) {
            console.log("No playable shows with episodes");
            return;
        }

        const show = 
            playableShows[Math.floor(Math.random() * playableShows.length)];

        const episode =
            show.episodes[Math.floor(Math.random() * show.episodes.length)];

        console.log("Selected episode: ", episode);

        // Saves episode globally
        setCurrentEpisode(episode);
        // This takes you to the watch screen for the episode 
        navigate("/watch");
    };

    return (
        <PlayerContext.Provider 
            value={{
                watchList,
                currentEpisode, 
                addToWatchList,
                removeFromWatchList,
                playNextEpisode
            }}
        >
            { children }
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);