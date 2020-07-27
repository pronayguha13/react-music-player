import React from "react";
import AudioPlayer from "react-h5-audio-player";

export default function PlayerControl({ track }) {
  console.log("AudioPlayer -> track", track);
  return (
    <AudioPlayer
      autoPlay
      src={URL.createObjectURL(new Blob(track))}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
}
