import React from "react";
import "./TrackList.css";
import { Card } from "react-bootstrap";
export default function TrackList({
  trackList,
  nowPlaying,
  setNowPlayingHandler,
  isPlaying,
  error,
}) {
  console.log("TrackList -> trackList", trackList);

  nowPlaying.length ? console.log(nowPlaying[0].name) : console.log("Nothing");

  return (
    <div className="TrackList">
      {trackList.map((track, index) => (
        <Card
          style={{
            height: 50,
            background: "rgb(237, 26, 55)",
            marginBottom: 10,
          }}
          key={index}
          onClick={() => setNowPlayingHandler(index)}
        >
          <p style={{ marginBottom: "auto", marginTop: "auto" }}>
            {isPlaying && nowPlaying[0].name === track.name ? (
              <img
                style={{
                  width: "24px",
                  border: "none",
                  outline: "none",
                  // marginRight: "30px",
                  marginLeft: 10,
                }}
                src="/assets/pause-button-24.png"
                alt="pause"
              />
            ) : (
              <img
                style={{
                  width: "24px",
                  border: "none",
                  outline: "none",
                  // marginRight: 30,
                  marginLeft: 10,
                }}
                src="/assets/playButton.png"
                alt="play"
              />
            )}
            <span style={{ cursor: "pointer" }}> {track.name}</span>
          </p>
        </Card>
      ))}
      {error && <p style={{ color: "#fff", textAlign: "center" }}>{error}</p>}
    </div>
  );
}
