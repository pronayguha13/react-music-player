import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TrackList from "./components/TrackList";
import AddTrackButton from "./components/AddTrackButton";
import AudioPlayer from "react-h5-audio-player";

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const getNewTrack = (newTrack) => {
    console.log("getNewTrack -> newTrack", newTrack);
    const prevTrackList = trackList;
    if (newTrack !== undefined) {
      const newTrackList = [...prevTrackList, newTrack];
      setTrackList(newTrackList);
    }
  };

  const setNowPlayingHandler = (index) => {
    console.log("setNowPlayingHandler -> index", index);
    setNowPlaying([trackList[index]]);
    console.log(trackList[index]);
    setIsPlaying(true);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <TrackList
        trackList={trackList}
        setNowPlayingHandler={setNowPlayingHandler}
        isPlaying={isPlaying}
      />
      <AddTrackButton trackList={trackList} updateTrackList={getNewTrack} />
      {nowPlaying.length > 0 ? (
        <AudioPlayer
          src={URL.createObjectURL(new Blob(nowPlaying))}
          autoPlay
          volume="0.5"
        />
      ) : null}
    </div>
  );
};

export default App;
