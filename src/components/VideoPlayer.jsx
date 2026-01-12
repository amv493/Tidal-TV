import { useEffect, useRef, useState } from "react";
import VideoControls from "./VideoControls"; 

export default function VideoPlayer({ episode, onEnded, onNext, onSkip, episodeTitle }) {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const containerRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleOverlayClick = () => {
    togglePlay();
  };

  const handleTimeUpdate = () => {
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  useEffect(() => {
    // Request fullscreen on container ref 
    if (containerRef.current && containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.warn("Fullscreen failed: ", err);
      });
    }
  }, [episode]);

  useEffect(() => {
    // Listener for fullscreen changes
    const handleFullscreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  },  []);

  return (
    <div
    ref={containerRef}
    className="video-container relative group bg-black w-full h-full"
    onMouseMove={() => setShowControls(true)}   // Show controls when moving mouse
    onMouseLeave={() => setShowControls(false)} // Hide controls when mouse leaves
    onClick={handleOverlayClick}   
    >
        {/* Title overlay */}
        {showControls && (
            <div
                className='absolute top-4 left-4 z-30 bg-black/60 backgrop-blur-sm text-white text-xl font-semibold px-4 py-2 rounded pointer-events-none'
            >
                {episode.title}
            </div>
        )}
        <video
            ref={videoRef}
            id="video-player"
            src={episode.videoUrl}
            autoPlay
            controls={false}
            onEnded={onEnded}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full"
        />

        {/*VideoControls*/}
        <VideoControls
            isPaused={isPaused}
            togglePlay={togglePlay}
            progress={progress}
            setProgress={setProgress}
            videoRef={videoRef}
            showControls={showControls}
            onNext={onNext}
            onSkip={onSkip}
            episodeTitle={episode.title}
        />
    </div>
  );
}
