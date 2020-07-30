import React, { useState } from "react";
import TrackList from "./components/TrackList";
import AddTrackButton from "./components/AddTrackButton";
import AudioPlayer from "react-h5-audio-player";
import Navbar from "./components/Header";

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const types = ["audio/mp3", "audio/ogg", "audio/mpeg"];

  const autoNextTrackSelector = () => {
    const currID = trackList.indexOf(nowPlaying[0]);
    if (trackList.length === 1 && currID === 0) {
      setNowPlaying([trackList[0]]);
    } else if (trackList.length > 1 && currID === trackList.length - 1) {
      setNowPlaying([trackList[0]]);
    } else {
      setNowPlaying([trackList[currID + 1]]);
    }
  };

  const getNewTrack = (newTrack) => {
    console.log("getNewTrack -> newTrack", newTrack);
    if (newTrack !== undefined && types.includes(newTrack.type)) {
      console.log("FileUploadHandler -> newTrack", newTrack);
      const prevTrackList = trackList;
      const newTrackList = [...prevTrackList, newTrack];
      console.log("getNewTrack -> newTrackList", newTrackList);
      setTrackList(newTrackList);
      setError("");
    } else if (newTrack.type === "audio/x-m4a") {
      setError("Unsupported File format");
    } else {
      console.log("no File or invalid type");
      setError("Please select an audio file");
    }
  };

  const setNowPlayingHandler = (index) => {
    setNowPlaying([trackList[index]]);
    setIsPlaying(true);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      {trackList.length || error !== null ? (
        <TrackList
          nowPlaying={nowPlaying}
          trackList={trackList}
          setNowPlayingHandler={setNowPlayingHandler}
          isPlaying={isPlaying}
          error={error}
        />
      ) : (
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            paddingTop: "20%",
            paddingBottom: "20%",
            background: "#002651",
            marginBottom: 0,
          }}
        >
          Add a track and start enjoying...
        </h3>
      )}
      <AddTrackButton trackList={trackList} updateTrackList={getNewTrack} />
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
