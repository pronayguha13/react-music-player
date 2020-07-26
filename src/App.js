import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TrackList from "./components/TrackList";
import AddTrackButton from "./components/AddTrackButton";
import AudioPlayer from "./components/AudioPlayer";
const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const getNewTrack = (newTrack) => {
    console.log("getNewTrack -> newTrack", newTrack);
    const prevTrackList = trackList;
    if (newTrack !== undefined) {
      const newTrackList = [...prevTrackList, newTrack];
      setTrackList(newTrackList);
    }
  };

  const selectTrackHandler = (index) => {
    console.log("selectTrackHandler -> trackList[index]", trackList[index]);

    setNowPlaying([trackList[index]]);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <TrackList
        trackList={trackList}
        selectTrackHandler={selectTrackHandler}
      />
      <AddTrackButton trackList={trackList} updateTrackList={getNewTrack} />
      {nowPlaying.length > 0 ? <AudioPlayer track={nowPlaying} /> : null}
    </div>
  );
};

export default App;
