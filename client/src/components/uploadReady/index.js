import React from "react";
import "./styles.css";

//antd
import { message } from "antd";

export default function UploadReady({
  setImageObjectURL,
  setCurrentMode,
  setImageBase64String,
  setUploadFormData,
}) {
  const transformToBase65String = (file) => {
    const fileReader = new FileReader();
    fileReader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setImageBase64String(fileReader.result);
      },
      false
    );

    fileReader.readAsDataURL(file);
  };
  const onClickUploadButton = (event) => {
    try {
      const selectedFile = event.target.files[0];
      const currentImagePath = URL.createObjectURL(event.target.files[0]);

      const formData = new FormData();
      formData.append("form", selectedFile);

      setUploadFormData(formData);
      setImageObjectURL(currentImagePath);
      transformToBase65String(event.target.files[0]);

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
