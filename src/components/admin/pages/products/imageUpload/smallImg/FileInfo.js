import React from "react";

function FileInfo({ onDelete, name }) {
  return (
    <div>
      <span>Name: {name}</span>
      <br />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default FileInfo;
