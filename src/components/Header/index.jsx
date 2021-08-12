import React, { useContext } from "react";

import { MusicContext } from "../../global/MusicContext";
import styles from "./styles.module.css";

const Header = () => {
  const { trackList } = useContext(MusicContext);
  return (
    <div className={styles.Header}>
      <p className={styles.HeaderText}>
        ReactTrack<span className={styles.subHeaderText}>-Play Your Jam</span>
      </p>
      {trackList && trackList.length ? (
        <img src="/assets/addBtn.svg" alt="Add" className={styles.addBtn} />
      ) : null}
    </div>
  );
};

export default Header;
