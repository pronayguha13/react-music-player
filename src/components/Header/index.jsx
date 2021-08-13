import React, { createRef, useContext } from "react";

import { MusicContext } from "../../global/MusicContext";
import styles from "./styles.module.css";

const Header = () => {
  const { getNewTrack } = useContext(MusicContext);

  const myRef = createRef();

  const fileUploadHandler = (e) => {
    const file = e.target.files[0];
    getNewTrack(file);
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
          onClick={() => myRef.current.click()}
        />
        <input
          type="file"
          accept="audio/m4a,audio/mp3,audio/AMR,audio/ogg"
          style={{ display: "none" }}
          ref={myRef}
          onChange={(e) => fileUploadHandler(e)}
        />
      </>
    </div>
  );
};

export default Header;
