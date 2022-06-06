const {
  FormRecognizerClient,
  AzureKeyCredential,
} = require("@azure/ai-form-recognizer");
const fs = require("fs");

const formRecognizerClient = new FormRecognizerClient(
  process.env.COGNITIVE_SERVICE_ENDPOINT,
  new AzureKeyCredential(process.env.COGNITIVE_SERVICE_KEY)
);

const READ = (req, res, next) => {
  const { path: filePath } = req.file;
  console.log("Filepath is: ", filePath);
  try {
    recognize(filePath).then((response) => {
      console.log("response: ", response);
      res.status(200);
      res.send(response);
    });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

const recognize = async (filePath) => {
  try {
    const readStream = fs.createReadStream(filePath);
    const poller = await formRecognizerClient.beginRecognizeContent(readStream);
    const pages = await poller.pollUntilDone();

    if (!pages || pages.length === 0) {
      throw new Error("Expecting non-empty list of pages!");
    }

    const [page] = pages;
    return page;
  } catch (err) {
    console.error("Error while recognizing document: ", err);
    throw new Error("Error while recognizing document");
  }
};

module.exports = {
  READ,
};
