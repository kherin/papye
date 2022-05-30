import React from "react";

//antd
import { Button, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";

//styles
import "./styles.css";

export default function Uploader() {
  const { Text } = Typography;
  return (
    <div className="uploader-container">
      <div className="upload-controls">
        <Button
          className="upload-button"
          type="primary"
          shape="circle"
          icon={<UploadOutlined />}
          size={"large"}
        />
        <Text>Upload an image to start</Text>
      </div>
    </div>
  );
}
