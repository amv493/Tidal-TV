import { usePlayer } from '../context/PlayerContext';

export default function ShowCard({ show }) {

    const { addToWatchList, removeFromWatchList, watchList } = usePlayer();

    const isInWatchList = watchList.some((s) => s.id === show.id);

    return (
        <div className='inline-block m-2 mb-20 justify-between'>
            <div>
                <img src={show.img} alt='' className='h-[75%] w-[75%]' />
            </div>
            <h3 className='py-2 font-bold text-lg'>{show.title}</h3>

            {isInWatchList ? (
                <button onClick={() => removeFromWatchList(show.id)} className='text-red-600'>
                    Remove
                </button>
            ) : (
                <button onClick={() => addToWatchList(show)} className='text-blue-600'>
                    Add To Watchlist
                </button>
            )}
        </div>
    );
}