import React, { useContext } from "react";

import styles from "./styles.module.css";
import { MusicContext } from "../../global/MusicContext";

import TrackCard from "../TrackCard/index";

const TrackList = () => {
  const { trackList, error } = useContext(MusicContext);

  return (
    <div
      className={`${styles.TrackList} ${
        trackList.length ? styles.filledList : styles.emptyList
      }`}
    >
      {trackList.length ? (
        trackList.map((track, index) => (
          <TrackCard key={index} track={track} index={index} />
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
