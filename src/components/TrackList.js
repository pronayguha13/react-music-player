import React from "react";
import "./TrackList.css";
import { Card } from "react-bootstrap";
export default function TrackList({
  trackList,
  nowPlaying,
  setNowPlayingHandler,
  isPlaying,
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
        >
          <p style={{ marginBottom: "auto", marginTop: "auto" }}>
            {/* && trackList.indexOf(nowPlaying) === index */}
            {isPlaying && nowPlaying[0].name === track.name ? (
              <img
                style={{
                  width: "24px",
                  border: "none",
                  outline: "none",
                  marginRight: "30px",
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
                  marginRight: 30,
                }}
                src="/assets/playButton.png"
                alt="play"
              />
            )}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setNowPlayingHandler(index)}
            >
              {" "}
              {track.name}
            </span>
          </p>
        </Card>
      ))}
    </div>
  );
}
