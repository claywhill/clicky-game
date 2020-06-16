import React from "react";

function ImageTile(props) {
  return (
    <div onClick={() => props.checkClicked(props.id)}>
        <img alt={props.name} src={props.image} />
    </div>
  )
}

export default ImageTile;