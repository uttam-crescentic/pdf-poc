const merge = require("pdf-merge");

const files = ["./front.pdf", "./sample-3.pdf", "./back.pdf"];
const outputFile = "merged.pdf";

merge(files, outputFile, function (err) {
  if (err) {
    console.log("Error merging PDFs:", err);
  } else {
    console.log("PDFs merged successfully!");
  }
});
