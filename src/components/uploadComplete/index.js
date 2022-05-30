import React from "react";

import "./styles.css";

// antd
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

export default function UploadComplete({ imagePath, onClickDeleteButton }) {
  return (
    <div className="upload-complete-section">
      <img src={imagePath} className="image-preview" alt="form-preview" />
      <Button danger icon={<DeleteFilled />} onClick={onClickDeleteButton}>
        Delete Image
      </Button>
    </div>
  );
}
