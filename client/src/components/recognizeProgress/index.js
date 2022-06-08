import React, { useEffect, useState } from "react";

import "./styles.css";

// antd
import { Spin } from "antd";

// custom
import Recognition from "@Services/recognition.js";

export default function RecognizeProgress({
  setCurrentMode,
  setRecognitionResult,
  uploadFormData,
}) {
  const [showSpin, setShowSpin] = useState(false);

  useEffect(() => {
    recognizeImage();
  }, []);

  const recognizeImage = async () => {
    setShowSpin(true);
    const result = await Recognition.recognize(uploadFormData);
    setRecognitionResult(result);
    setCurrentMode("UPLOAD_COMPLETE");
    setShowSpin(false);
  };

  return (
    <Spin
      size="large"
      spinning={showSpin}
      className="recognize-in-progress-section"
    />
  );
}
