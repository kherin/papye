import React, { useEffect, useRef } from "react";

import "./styles.css";

export default function RecognizeComplete({
  imageObjectURL,
  setCurrentMode,
  recognitionResult,
  imageBase64String,
  uploaderDimensions,
}) {
  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = uploaderDimensions.width;
    canvasEle.height = uploaderDimensions.height;
    ctx = canvasEle.getContext("2d");

    loadImage();
    drawBoundingBoxes();
  }, []);

  const loadImage = () => {
    const image = new Image();
    image.src = imageBase64String;

    image.onload = () => {
      ctx.globalCompositeOperation = "destination-over";
      ctx.drawImage(
        image,
        0,
        0,
        uploaderDimensions.width,
        uploaderDimensions.height
      );
    };
  };

  const drawBoundingBoxes = () => {
    console.log({ recognitionResult });
    const { symbols } = recognitionResult;

    for (let symbol of symbols) {
      const { bbox } = symbol;
      const { x0, y0, x1, y1 } = bbox;

      const x = x0;
      const y = y0;
      const h = y1 - y0;
      const w = x1 - x0;

      drawRect({ x, y, w, h });
    }
  };

  const drawRect = (dims) => {
    const { x, y, w, h } = dims;
    const borderColor = "red";
    const borderWidth = 1;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

  return (
    <div>
      <canvas ref={canvas}></canvas>
    </div>
  );
}
