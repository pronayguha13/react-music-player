import React, { createRef, useContext } from "react";
import { Button } from "react-bootstrap";

import { MusicContext } from "../../global/MusicContext";

const AddTrackButton = () => {
  const { getNewTrack } = useContext(MusicContext);
  const myRef = createRef();

  const fileUploadHandler = (e) => {
    const file = e.target.files[0];
    getNewTrack(file);
  };

  return (
    <div style={{ textAlign: "center", background: "#002651" }}>
      <Button
        style={{
          border: "none",
          borderRadius: "50%",
          marginBottom: 20,
          outline: "none",
        }}
        onClick={() => myRef.current.click()}
      >
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
};

export default AddTrackButton;
