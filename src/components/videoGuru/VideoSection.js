import React, { useRef, useState } from "react";
import styles from "./videosection.module.css";
import explainVideo from "../../assests/collegeMajor.mp4";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.mainVideoCtn}>
      <p className={styles.message}>
        How to Use Our Website and Showing All Feature Of Our Website{" "}
      </p>

      <div className={styles.explainContainer}>
        <video
          className={styles.singleVideo}
          ref={videoRef}
          src={explainVideo}
          onClick={handlePlayPause}
        />
      </div>

      <button className={styles.playButton} onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoSection;
