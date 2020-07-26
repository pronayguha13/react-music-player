import React from "react";
import { Button } from "react-bootstrap";

export default function AddTrackButton({ trackList, updateTrackList }) {
  // const [track, setTrack] = useState("");
  const myRef = React.createRef();

  const fileUploadHandler = (e) => {
    const file = e.target.files[0];
    console.log("fileUploadHandler -> file", file);
    updateTrackList(file);
  };

  return (
    <div>
      <Button className="w-100" onClick={() => myRef.current.click()}>
        +
      </Button>
      <input
        type="file"
        accept="audio/m4a,audio/mp3,audio/AMR,audio/ogg"
        style={{ display: "none" }}
        ref={myRef}
        onChange={(e) => fileUploadHandler(e)}
      />
    </div>
  );
}
