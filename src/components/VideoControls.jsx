// src/components/VideoControls.jsx
export default function VideoControls({ isPaused, togglePlay, progress, setProgress, videoRef, showControls, onNext, onSkip }) {

    // Fullscreen Mode 
    const toggleFullScreen = () => {
        // Request fullscreen mode if not fullscreen
        if (!document.fullscreenElement) {
            videoRef.current.parentElement.requestFullscreen();
        } else {
            // Exits if already fullscreen
            document.exitFullscreen();
        }
    }

  return (
    <div
      className={`absolute bottom-2 w-full px-4 transition-opacity ${showControls ? "opacity-100" : "opacity-0"}`}
    >

      {/* Play/Pause */}
      <button onClick={togglePlay} className="text-white text-3xl mr-4">
        {isPaused ? "▶" : "❚❚"}
      </button>

      {/* Progress bar */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => {
          const percent = e.target.value;
          videoRef.current.currentTime =
            (videoRef.current.duration * percent) / 100;
          setProgress(percent);
        }}
        className="w-3/4 h-1 accent-red-500 cursor-pointer"
      />

      {/* Buttons */}
      <button onClick={onNext} className="ml-4 px-2 py-1 bg-white text-black rounded">
        Next
      </button>
      <button onClick={onSkip} className="ml-2 px-2 py-1 bg-white text-black rounded">
        Skip
      </button>
      <button 
        onClick={toggleFullScreen}
        className='text-white text-3xl ml-2'
        title="Fullscreen"
        >
            ⛶
        </button>
    </div>
  );
}
