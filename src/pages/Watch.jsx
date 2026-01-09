import { useEffect, useRef } from 'react';
import { usePlayer } from '../context/PlayerContext';

export default function Watch() {
    const { currentEpisode, playNextEpisode } = usePlayer();
    const videoRef = useRef(null);

    if (!currentEpisode) {
        return <p>No episode selected yet.</p>;
    }

    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        if (videoEl.requestFullscreen) {
            videoEl.requestFullscreen().catch((err) => {
                console.warn("Fullscreen request failed: ", err);
            });
        }

        videoEl.play().catch(() => {
            console.warn("Autoplay blocked. Browser may require user interaction.");
        });
    }, [currentEpisode]);

    return (
        <div
            style={{
                width: "100vw", 
                height: "100vh",
                display: "flex",
                flexDirection: "column", 
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ color: "white", marginBottom: "1rem"}}>
                {currentEpisode.title}
            </h1>
            <video 
                ref={videoRef}
                src={currentEpisode.videoUrl}
                controls
                style={{
                    maxWidth: "100%",
                    maxHeight: "90%",
                }}
                onEnded={playNextEpisode}
            />
            <div style={{ marginTop: "1rem"}}>
                <button onClick={playNextEpisode} className='bg-blue-600 text-white px-5 py-1 rounded-full mt-2 hover:bg-'>Next</button>
            </div>
        </div>
    );
}