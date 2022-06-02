import React, { useState, useEffect, useRef } from "react";

// custom
import UploadReady from "@Components/uploadReady";
import UploadComplete from "@Components/uploadComplete";
import RecognizeProgress from "@Components/recognizeProgress";
import RecognizeComplete from "@Components/recognizeComplete";

//styles
import "./styles.css";

export default function Uploader() {
  const [imageObjectURL, setImageObjectURL] = useState("");
  const [imageBase64String, setImageBase64String] = useState("");
  const [currentMode, setCurrentMode] = useState("UPLOAD_READY");
  const [recognitionResult, setRecognitionResult] = useState({});
  const [uploaderDimensions, setUploaderDimensions] = useState({
    height: 0,
    width: 0,
  });

  const ref = useRef(null);

  useEffect(() => {
    const uploaderHeight = ref.current.clientHeight;
    const uploaderWidth = ref.current.clientWidth;

    setUploaderDimensions({
      height: uploaderHeight,
      width: uploaderWidth,
    });
  }, []);

  const onClickDeleteButton = () => {
    setCurrentMode("UPLOAD_READY");
    setImageObjectURL("");
  };

  return (
    <div ref={ref} className="uploader-container">
      {(() => {
        switch (currentMode) {
          case "UPLOAD_READY":
            return (
              <UploadReady
                setCurrentMode={setCurrentMode}
                setImageObjectURL={setImageObjectURL}
                setImageBase64String={setImageBase64String}
              />
            );
          case "RECOGNIZE_IN_PROGRESS":
            return (
              <RecognizeProgress
                imageObjectURL={imageObjectURL}
                setCurrentMode={setCurrentMode}
                setRecognitionResult={setRecognitionResult}
              />
            );
          case "RECOGNIZE_COMPLETE":
            return (
              <RecognizeComplete
                recognitionResult={recognitionResult}
                imageBase64String={imageBase64String}
                uploaderDimensions={uploaderDimensions}
              />
            );
          case "UPLOAD_COMPLETE":
            return (
              <UploadComplete
                imageObjectURL={imageObjectURL}
                setCurrentMode={setCurrentMode}
                onClickDeleteButton={onClickDeleteButton}
              />
            );
        }
      })()}
    </div>
  );
}
