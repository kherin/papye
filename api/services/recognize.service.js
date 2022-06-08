const {
  FormRecognizerClient,
  DocumentAnalysisClient,
  AzureKeyCredential,
} = require("@azure/ai-form-recognizer-beta");
const fs = require("fs");

const endpoint = process.env.COGNITIVE_SERVICE_ENDPOINT;
const key = process.env.COGNITIVE_SERVICE_KEY;
const documentAnalysisClient = new DocumentAnalysisClient(
  endpoint,
  new AzureKeyCredential(key)
);

const READ = (req, res, next) => {
  const { path: filePath } = req.file;
  try {
    recognize(filePath)
      .then((response) => {
        res.status(200);
        res.send(response);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
      });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

const recognize = async (filePath) => {
  try {
    const file = fs.createReadStream(filePath);
    const poller = await documentAnalysisClient.beginAnalyzeDocument(
      "prebuilt-document",
      file
    );
    const { keyValuePairs, entities } = await poller.pollUntilDone();
    return { keyValuePairs, entities };
  } catch (err) {
    console.error("Error while recognizing document: ", err);
    throw new Error("Error while recognizing document");
  }
};

module.exports = {
  READ,
};
