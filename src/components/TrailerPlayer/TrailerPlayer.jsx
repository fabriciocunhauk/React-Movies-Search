import React from "react";
import closeIcon from "../../assets/images/x-mark.svg";
import "./trailer-player.css";

function TrailerPlayer({ trailerContainer, onClick, movieTrailer }) {
  return (
    <div
      style={{ display: `${trailerContainer}` }}
      className="trailer-container"
    >
      <img
        className="close-icon"
        src={closeIcon}
        alt="close icon"
        onClick={onClick}
      />
      <div className="trailer-content">
        <iframe
          className="video-playback"
          title="trailer player"
          src={`https://www.youtube.com/embed/${movieTrailer}`}
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerPlayer;
