const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from FS module");
});

app.post("/file/create", (req, res) => {
  const { filename, fileData } = req.body;

  fs.writeFile(`./Uploads/${filename}`, fileData, (err) => {
    if (err) {
      console.log(err)
      res.send("Unable to create a the file at this moment ");
    } else {
      res.send("File created");
    }
  });
});

app.get("/file/read/:fileName", (req, res) => {

  fs.readFile(`./Uploads/${req.params.fileName}`, "utf8", (err, data) => {
    if (err) {
      res.send("Unable to read the file at this moment");
    } else {
      res.send(data);
    }
  });
});

app.patch("/file/update", (req, res) => {
  const { filename, updatedData } = req.body;

  fs.appendFile(`./Uploads/${filename}`, `\n${updatedData}`, "utf-8", (err) => {
    if (err) {
      res.send("Unable to update the file right now");
    } else {
      res.send("File updated successfully");
    }
  });
});

app.delete("/file/delete", (req, res) => {
  const { filename } = req.body;

  fs.unlink(`./Uploads/${filename}`, (err) => {

  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
if (err) {
  res.send("Unable to delete the file");
} else {
  res.send("File deleted successfully");
}