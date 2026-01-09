import { useEffect, useRef } from 'react';

export default function VideoPlayer({ episode, onEnded, onNext, onSkip }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) return;
        // Enters fullscreen automatically
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen().catch((err) => {
                console.warn("Fullscreen failed: ", err);
            });
        }
    }, [episode]);

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                id="video-player"
                src={episode.videoUrl}
                controls
                autoPlay
                onEnded={onEnded}
            />
            <button onClick={onNext} className='bg-white'>Next</button>
            <button onClick={onSkip} className='bg-white'>Skip</button>
        </div>
    )
}