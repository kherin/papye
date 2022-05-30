import Tesseract, { createWorker } from "tesseract.js";

async function read(imagePath, logger, collector) {
  const result = await Tesseract.recognize(imagePath, "eng", {
    logger: (log) => logger(log),
  }).catch((err) => {
    console.error(err);
  });

  return result;
}

const Recognition = {
  read: read,
};

export default Recognition;
