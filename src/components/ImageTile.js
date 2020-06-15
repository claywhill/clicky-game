import React from "react";

function ImageTile(props) {
  return (
    <div className="image" onClick={() => props.checkClicked(props.id)}>
      <div className="image-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}

export default ImageTile;