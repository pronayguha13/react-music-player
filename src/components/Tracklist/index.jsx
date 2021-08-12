import React, { useContext } from "react";

import styles from "./styles.module.css";
import { MusicContext } from "../../global/MusicContext";

const TrackList = () => {
  const { trackList, nowPlaying, setNowPlayingHandler, isPlaying, error } =
    useContext(MusicContext);

  return (
    <div className={styles.TrackList}>
      {trackList.length ? (
        trackList.map((track, index) => (
          <div
            style={{
              height: 50,
              background: "rgb(237, 26, 55)",
              marginBottom: 10,
            }}
            key={index}
            onClick={() => setNowPlayingHandler(index)}
          >
            <p style={{ marginBottom: "auto", marginTop: "auto" }}>
              {isPlaying && nowPlaying[0].name === track.name ? (
                <img
                  style={{
                    width: "24px",
                    border: "none",
                    outline: "none",
                    // marginRight: "30px",
                    marginLeft: 10,
                  }}
                  src="/assets/pause-button-24.png"
                  alt="pause"
                />
              ) : (
                <img
                  style={{
                    width: "24px",
                    border: "none",
                    outline: "none",
                    // marginRight: 30,
                    marginLeft: 10,
                  }}
                  src="/assets/playButton.png"
                  alt="play"
                />
              )}
              <span style={{ cursor: "pointer" }}> {track.name}</span>
            </p>
          </div>
        ))
      ) : (
        <h3>Hello</h3>
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
