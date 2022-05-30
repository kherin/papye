import React, { useEffect, useState } from "react";

import "./styles.css";

// antd
import { Progress } from "antd";

// custom
import Recognition from "@Services/recognition.js";
import Utils from "@Shared/utils";

export default function RecognizeProgress({
  setCurrentMode,
  imagePath,
  setRecognitionResult,
}) {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [progressMessage, setProgressMessage] = useState("");

  useEffect(() => {
    recognizeImage();
  }, []);

  const recognitionLogger = (log) => {
    const { progress, status } = log;

    const percentage = Utils.toPercent(progress);

    setProgressMessage(status);
    setProgressPercentage(percentage);
  };

  const recognizeImage = async () => {
    Recognition.read(imagePath, recognitionLogger, null)
      .then(({ data }) => {
        setRecognitionResult(data);
        setCurrentMode("RECOGNIZE_COMPLETE");
      })
      .catch((error) => {
        console.log(`Error: ${error} while recognizing image: ${imagePath}`);
      });
  };

  return (
    <Progress
      className="recognize-in-progress-section"
      width={200}
      type="circle"
      percent={progressPercentage}
      format={(_) => `${progressMessage}`}
    />
  );
}
