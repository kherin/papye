import React, { useState } from "react";

// custom
import UploadReady from "@Components/uploadReady";
import UploadComplete from "@Components/uploadComplete";
import RecognizeProgress from "@Components/recognizeProgress";
import RecognizeComplete from "@Components/recognizeComplete";

//styles
import "./styles.css";

export default function Uploader() {
  const [imagePath, setImagePath] = useState("");
  const [currentMode, setCurrentMode] = useState("UPLOAD_READY");
  const [recognitionResult, setRecognitionResult] = useState({});

  const onClickDeleteButton = () => {
    setCurrentMode("UPLOAD_READY");
    setImagePath("");
  };

  return (
    <div className="uploader-container">
      {(() => {
        switch (currentMode) {
          case "UPLOAD_READY":
            return (
              <UploadReady
                setImagePath={setImagePath}
                setCurrentMode={setCurrentMode}
              />
            );
          case "RECOGNIZE_IN_PROGRESS":
            return (
              <RecognizeProgress
                imagePath={imagePath}
                setCurrentMode={setCurrentMode}
                setRecognitionResult={setRecognitionResult}
              />
            );
          case "RECOGNIZE_COMPLETE":
            return <RecognizeComplete />;
          case "UPLOAD_COMPLETE":
            return (
              <UploadComplete
                imagePath={imagePath}
                setCurrentMode={setCurrentMode}
                onClickDeleteButton={onClickDeleteButton}
              />
            );
        }
      })()}
    </div>
  );
}
