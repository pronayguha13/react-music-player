import React, { useContext } from "react";
import { MusicContext } from "../../global/MusicContext";

import styles from "./styles.module.css";

const TrackCard = ({ track, index }) => {
  const {
    isPlaying,
    nowPlaying,
    setNowPlayingHandler,
    isRepeat,
    repeatTrackId,
  } = useContext(MusicContext);
  return (
    <div
      className={styles.trackCard}
      onClick={() => setNowPlayingHandler(index)}
    >
      <div className={styles.dragPlayController}>
        <img src="/assets/drag.svg" alt="reorder-slider" />
        <img
          src={`/assets/${
            isPlaying && nowPlaying[0].name === track.name
              ? "pause.svg"
              : "play.svg"
          }`}
          className={styles.trackBtn}
          alt="pause"
        />
      </div>
      <p className={styles.trackName}>{track.name}</p>
      <div className={styles.repeatDeleteController}>
        <img src="/assets/remove.svg" alt="remove-track" />
        {
          <img
            src={`/assets/${
              isRepeat && repeatTrackId === index ? "repeat" : "repeat"
            }.svg`}
            alt="repeat-track"
          />
        }
      </div>
    </div>
  );
};

export default TrackCard;
