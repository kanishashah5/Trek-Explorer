import React from "react";
import "../styles/ImageCard.css"; 
function ImageCard({ title, imageUrl, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
        <h3 style={{textAlign:'center'}}>{title}</h3>
        <div className="image-card-overlay">
          <h4>{title}</h4>
        </div>
        <img src={imageUrl} alt={title} className="image-card-img" />
    </div>
  );
}

export default ImageCard;
