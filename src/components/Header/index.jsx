import React, { createRef, useState, useContext, useEffect } from "react";

import { MusicContext } from "../../global/MusicContext";
import styles from "./styles.module.css";

const Header = () => {
  const [file, setFile] = useState({});
  const { getNewTrack } = useContext(MusicContext);

  const fileInputRef = createRef();

  useEffect(() => {
    if (Object.keys(file).length) getNewTrack(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const fileUploadHandler = (newFile) => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 18 ~ fileUploadHandler ~ newFile",
      newFile
    );
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
          onChange={(e) => fileUploadHandler(e.target.files)}
        />
      </>
    </div>
  );
};

export default Header;
