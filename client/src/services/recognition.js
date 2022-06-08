import Tesseract from "tesseract.js";

async function read(imagePath, logger, collector) {
  const result = await Tesseract.recognize(imagePath, "eng", {
    logger: (log) => logger(log),
  }).catch((err) => {
    console.error(err);
  });

  return result;
}

async function recognize(formData) {
  const endpoint = `${process.env.REACT_APP_API_ENPOINT}/recognize/upload`;
  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  }).catch((error) => {
    throw new Error("Error:", error);
  });

  const json = await response.json();
  return json;
}

const Recognition = {
  read: read,
  recognize: recognize,
};

export default Recognition;
