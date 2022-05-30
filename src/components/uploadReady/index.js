import React from "react";
import "./styles.css";

//antd
import { message } from "antd";

export default function UploadReady({ setImagePath, setCurrentMode }) {
  const onClickUploadButton = (event) => {
    try {
      const currentImagePath = URL.createObjectURL(event.target.files[0]);
      setImagePath(currentImagePath);
      message.success("Upload successful");
      setCurrentMode("RECOGNIZE_IN_PROGRESS");
    } catch (e) {
      message.error("Upload failed. Please try again");
    }
  };

  return (
    <div className="upload-ready-section">
      <input type="file" onChange={onClickUploadButton} accept="image/*" />
    </div>
  );
}
