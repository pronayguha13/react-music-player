import React from "react";
import "./TrackList.css";
import { Card, Button } from "react-bootstrap";
export default function TrackList({ trackList, selectTrackHandler }) {
  console.log("TrackList -> trackList", trackList);
  return (
    <div className="TrackList">
      {trackList.length ? (
        trackList.map((track, index) => (
          <Card style={{ height: 50 }} key={index}>
            <p style={{ marginBottom: "auto", marginTop: "auto" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  margin: "0",
                  outline: "none",
                }}
                onClick={() => selectTrackHandler(index)}
              >
                <img
                  style={{
                    width: "24px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "white",
                  }}
                  src="/assets/playButton.png"
                  alt="play"
                />
              </button>
              {track.name}
              <button
                style={{
                  float: "right",
                  backgroundColor: "white",
                  border: "none",
                  outline: "none",
                  marginRight: 12,
                }}
              >
                :
              </button>
            </p>
          </Card>
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>No Track</h3>
      )}
    </div>
  );
}
