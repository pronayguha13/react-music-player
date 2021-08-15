import React, { createRef, useContext } from "react";

import { MusicContext } from "../../global/MusicContext";
import styles from "./styles.module.css";

const Header = () => {
  const { getNewTrack } = useContext(MusicContext);

  const fileInputRef = createRef();

  const fileUploadHandler = (newFile) => {
    getNewTrack(newFile);
  };

  return (
    <div className={styles.Header}>
      <p className={styles.HeaderText}>
        ReactTrack<span className={styles.subHeaderText}>-Play Your Jam</span>
      </p>
      <>
        <img
          src="/assets/addBtn.svg"
          alt="Add"
          className={styles.addBtn}
          onClick={() => fileInputRef.current.click()}
        />
        <input
          type="file"
          accept="audio/m4a,audio/mp3,audio/AMR,audio/ogg"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => fileUploadHandler(e.target.files[0])}
        />
      </>
    </div>
  );
};

export default Header;
