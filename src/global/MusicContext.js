import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const Music = ({ children }) => {
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
    <MusicContext.Provider
      value={{
        trackList,
        nowPlaying,
        isPlaying,
        error,
        types,
        setTrackList,
        setNowPlaying,
        setIsPlaying,
        setError,
        autoNextTrackSelector,
        getNewTrack,
        setNowPlayingHandler,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
