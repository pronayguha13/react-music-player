import React, { useState } from "react";
import TrackList from "./components/TrackList";
import AddTrackButton from "./components/AddTrackButton";
import AudioPlayer from "react-h5-audio-player";
import Navbar from "./components/Header";

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

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
    const prevTrackList = trackList;
    if (newTrack !== undefined) {
      const newTrackList = [...prevTrackList, newTrack];
      setTrackList(newTrackList);
    }
  };

  const setNowPlayingHandler = (index) => {
    setNowPlaying([trackList[index]]);
    setIsPlaying(true);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      {trackList.length ? (
        <TrackList
          nowPlaying={nowPlaying}
          trackList={trackList}
          setNowPlayingHandler={setNowPlayingHandler}
          isPlaying={isPlaying}
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
          No Track
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
