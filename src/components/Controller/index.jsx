import React, { createRef, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";

import { MusicContext } from "../../global/MusicContext";

import styles from "./styles.module.css";

const Controller = () => {
  const { getNewTrack, nowPlaying, autoNextTrackSelector, trackList } =
    useContext(MusicContext);

  

  return (
    <div className={styles.ControllerContainer}>
      <div className={styles.playController}></div>
      <div className={styles.otherController}></div>
    </div>
  );
};

export default Controller;
