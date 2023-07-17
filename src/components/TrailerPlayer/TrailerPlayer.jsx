import React from "react";
import closeIcon from "../../assets/images/x-mark.svg";
import "./trailer-player.css";

function TrailerPlayer({ closeTrailerContainer, onClick, movieTrailerKey }) {
  return (
    <div
      className={closeTrailerContainer ? "trailer-container-hide" : "trailer-container"}
    >
      <img
        className="close-icon"
        src={closeIcon}
        alt="close icon"
        onClick={onClick}
      />
        <iframe
          className="video-playback"
          title="trailer player"
          src={`https://www.youtube.com/embed/${movieTrailerKey}`}
        ></iframe>
    </div>
  );
}

export default TrailerPlayer;
