import React, { useContext } from "react";

import styles from "./styles.module.css";
import { MusicContext } from "../../global/MusicContext";

const TrackList = () => {
  const { trackList, nowPlaying, setNowPlayingHandler, isPlaying, error } =
    useContext(MusicContext);

  return (
    <div
      className={`${styles.TrackList} ${
        trackList.length ? styles.filledList : styles.emptyList
      }`}
    >
      {trackList.length ? (
        trackList.map((track, index) => (
          <div
            key={index}
            className={styles.trackCard}
            onClick={() => setNowPlayingHandler(index)}
          >
            <img
              src={`/assets/${
                isPlaying && nowPlaying[0].name === track.name
                  ? "pause.svg"
                  : "play.svg"
              }`}
              className={styles.trackBtn}
              alt="pause"
            />
            <p className={styles.trackName}>{track.name}</p>
          </div>
        ))
      ) : (
        <h3 className={styles.NoTrackHeader}>Play your favorite track</h3>
      )}
      {error && (
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            paddingTop: "30%",
            paddingBottom: "30%",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default TrackList;
