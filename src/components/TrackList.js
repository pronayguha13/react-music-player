import React from "react";
import "./TrackList.css";
import { Card } from "react-bootstrap";
export default function TrackList({
  trackList,
  setNowPlayingHandler,
  isPlaying,
}) {
  console.log("TrackList -> trackList", trackList);
  return (
    <div className="TrackList">
      {trackList.length ? (
        trackList.map((track, index) => (
          <Card style={{ height: 50 }} key={index}>
            <p style={{ marginBottom: "auto", marginTop: "auto" }}>
              {isPlaying ? (
                <img
                  style={{
                    width: "24px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "white",
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
                    backgroundColor: "white",
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
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>No Track</h3>
      )}
    </div>
  );
}
