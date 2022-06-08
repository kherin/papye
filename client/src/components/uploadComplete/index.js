import React, { useEffect } from "react";
import StringSimilarity from "string-similarity";

import "./styles.css";

// antd
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

// custom
import { fieldsConfig } from "@Shared/config";

export default function UploadComplete({
  form,
  imageObjectURL,
  recognitionResult,
  onClickDeleteButton,
}) {
  useEffect(() => {
    // iterate through fieldsConfig
    const { keyValuePairs } = recognitionResult;
    for (let fieldConfig of fieldsConfig) {
      const { name, label } = fieldConfig;
      const bestFieldMatch = findBestMatch(label, keyValuePairs);
      if (bestFieldMatch) {
        const { value } = bestFieldMatch;

        if (value && value["content"]) {
          form.setFieldsValue({
            [name]: value["content"],
          });
        }
      }
    }
  }, []);

  const findBestMatch = (label, keyValuePairs) => {
    const bestFieldMatch = keyValuePairs.find(({ key }) => {
      const similarity = StringSimilarity.compareTwoStrings(
        label,
        key["content"]
      );

      return similarity > 0.5;
    });

    return bestFieldMatch;
  };

  return (
    <div className="upload-complete-section">
      <img src={imageObjectURL} className="image-preview" alt="form-preview" />
      <Button danger icon={<DeleteFilled />} onClick={onClickDeleteButton}>
        Delete Image
      </Button>
    </div>
  );
}
