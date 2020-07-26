import React from "react";

export default function AudioPlayer({ track }) {
  console.log("AudioPlayer -> track", track);
  return (
    <div style={{ width: "100%" }}>
      <audio controls>
        <source src={URL.createObjectURL(new Blob(track))}></source>
      </audio>
    </div>
  );
}
