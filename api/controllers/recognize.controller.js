const UPLOAD = (req, res, next) => {
  if (req.file) {
    const { path: filePath } = req.file;
    console.log("File Path is", filePath);
    next();
  } else {
    console.error("Error: file is empty");
    res.status(500);
    res.send("Error: file is empty");
  }
};

module.exports = {
  UPLOAD,
};
