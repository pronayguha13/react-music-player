import React, { createRef, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";

import { MusicContext } from "../../global/MusicContext";

import styles from "./styles.module.css";

const Controller = () => {
  const { getNewTrack, nowPlaying, autoNextTrackSelector } =
    useContext(MusicContext);
  const myRef = createRef();

  const fileUploadHandler = (e) => {
    const file = e.target.files[0];
    getNewTrack(file);
  };

  return (
    <div style={{ textAlign: "center", background: "#002651" }}>
      <button
        style={{
          border: "none",
          borderRadius: "50%",
          marginBottom: 20,
          outline: "none",
        }}
        onClick={() => myRef.current.click()}
      >
        +
      </button>
      <input
        type="file"
        accept="audio/m4a,audio/mp3,audio/AMR,audio/ogg"
        style={{ display: "none" }}
        ref={myRef}
        onChange={(e) => fileUploadHandler(e)}
      />
      {nowPlaying.length > 0 ? (
        <AudioPlayer
          src={URL.createObjectURL(new Blob(nowPlaying))}
          autoPlay
          volume="0.5"
          onEnded={autoNextTrackSelector}
        />
      ) : null}
    </div>
  );
};

export default Controller;
