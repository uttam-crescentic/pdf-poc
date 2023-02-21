const PDFDocument = require("pdfkit");
const fs = require("fs");

const mergeImagesToPdf = (inputFiles, outputFile) => {
  const doc = new PDFDocument();

  // Add each image to a new page in the PDF document
  inputFiles.forEach((file) => {
    doc.addPage();

    // Add the contents of the PDF file to the new page
    doc.save();
    doc.addContent(fs.readFileSync(file));
    doc.restore();
  });

  // Write the merged PDF document to the output file
  const stream = fs.createWriteStream(outputFile);
  doc.pipe(stream);
  doc.end();
};

// Example usage: Merge three images into merged.pdf
mergeImagesToPdf(["./front.pdf", "./sample-3.pdf", "./back.pdf"], "merged.pdf");
