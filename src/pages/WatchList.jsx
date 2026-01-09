import { usePlayer } from '../context/PlayerContext';

export default function WatchList() {
  const { watchList, removeFromWatchList } = usePlayer();

  return (
    <div>
        <h1>My Watchlist</h1>

        {watchList.length === 0 && <p>No shows added so far.</p>}

        {watchList.map((show) => (
          <div key={show.id}>
            <span>{show.title}</span>
            <button onClick={() => removeFromWatchList(show.id)}>
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}

