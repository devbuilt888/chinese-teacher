import React from "react";

const VideoCard = ({ video }) => {
  let cardColor;

  function changeCardColor() {
    const colorNum = Math.random();
    if (colorNum < 0.2) {
      cardColor = "#95ccea";
    } else if (colorNum > 0.2 && colorNum < 0.4) {
      cardColor = "#a3d6e0";
    } else if (colorNum > 0.4 && colorNum < 0.6) {
      cardColor = "#068fd5";
    } else if (colorNum > 0.6 && colorNum < 0.8) {
      cardColor = "#f4b19f";
    } else if (colorNum > 0.8) {
      cardColor = "#f7d059";
    }
  }

  changeCardColor();

  return (
    <div
      className="video-card"
      style={{ backgroundColor: cardColor, color: "white" }}
    >
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-card-img"
        />
      </a>
      <div className="video-card-body">
        <h2 className="video-card-title">{video.title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
