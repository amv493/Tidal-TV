import { usePlayer } from '../context/PlayerContext';
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

export default function ShowCard({ show }) {

    const { addToWatchList, removeFromWatchList, watchList } = usePlayer();

    const isInWatchList = watchList.some((s) => s.id === show.id);

    return (
        <div className='inline-block m-2 mb-20 justify-between'>
            <div>
                <img src={show.img} alt='' className='h-[75%] w-[75%]' />
            </div>
            <div className='flex inline-flex justify-between gap-5 pt-2'>
                <h3 className='py-2 font-bold text-lg'>{show.title}</h3>

                {isInWatchList ? (
                    <button onClick={() => removeFromWatchList(show.id)} className='p-3 text-white border-2 bg-blue-600'>
                        <FaBookmark />
                    </button>
                ) : (
                    <button onClick={() => addToWatchList(show)} className='p-3 border-2 bg-blue-600 text-white'>
                        <FaRegBookmark />
                    </button>
                )}
            </div>
        </div>
    );
}