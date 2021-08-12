import React, { useContext } from "react";
import TrackList from "./components/Tracklist";
import AddTrackButton from "./components/Controller";
import AudioPlayer from "react-h5-audio-player";
import Navbar from "./components/Header/index.jsx";

import { MusicContext } from "./global/MusicContext";

const App = () => {
  const { trackList, error, nowPlaying, autoNextTrackSelector } =
    useContext(MusicContext);

  return (
    <div className="w-100">
      <Navbar />
      {trackList.length || error !== null ? (
        <TrackList />
      ) : (
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            paddingTop: "50%",
            paddingBottom: "50%",
            background: "#002651",
            marginBottom: 0,
          }}
        >
          Add a track and start enjoying...
        </h3>
      )}
      <AddTrackButton />
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

export default App;
