import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-h5-audio-player/lib/styles.css";

import { Music } from "./global/MusicContext";

ReactDOM.render(
  <React.StrictMode>
    <Music>
      <App />
    </Music>
  </React.StrictMode>,
  document.getElementById("root")
);
