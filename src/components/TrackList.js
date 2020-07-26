import React from "react";
import "./TrackList.css";
import { Card } from "react-bootstrap";
export default function TrackList({ trackList, selectTrackHandler }) {
  console.log("TrackList -> trackList", trackList);
  return (
    <div className="TrackList">
      {trackList.length ? (
        trackList.map((track, index) => (
          <Card style={{ height: 50 }} key={index}>
            <p
              style={{ marginBottom: "auto", marginTop: "auto" }}
              onClick={() => selectTrackHandler(index)}
            >
              {track.name}
            </p>
          </Card>
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>No Track</h3>
      )}
    </div>
  );
}
