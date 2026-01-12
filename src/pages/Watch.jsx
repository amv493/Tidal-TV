import { usePlayer } from '../context/PlayerContext';
import VideoPlayer from '../components/VideoPlayer';

export default function Watch() {
    const { currentEpisode, playNextEpisode } = usePlayer();

    if (!currentEpisode) {
        return <p>No episode selected yet.</p>;
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-black'>
            <VideoPlayer
                episode={currentEpisode}
                onEnded={playNextEpisode}
                onNext={playNextEpisode}
                onSkip={playNextEpisode}
            />
        </div>
    );
}