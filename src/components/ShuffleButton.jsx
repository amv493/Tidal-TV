import { usePlayer } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

export default function ShuffleButton() {
    const { playNextEpisode } = usePlayer();
    const navigate = useNavigate();

    const handleShuffle = () => {
        playNextEpisode();
        navigate('/watch');
    }

    return (
        <button onClick={handleShuffle} className='bg-blue-500 text-white text-center p-2 rounded-full mt-2 bottom-4 right-4 fixed'>
            Next Wave
        </button>
    );
}