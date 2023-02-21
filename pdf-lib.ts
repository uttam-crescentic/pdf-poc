const { PDFDocument, PDFPage } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function mergePDFs() {
  const pdf1 = await PDFDocument.load(fs.readFileSync("./front.pdf"));
  const pdf2 = await PDFDocument.load(fs.readFileSync("./sample-3.pdf"));
  const pdf3 = await PDFDocument.load(fs.readFileSync("./back.pdf"));

  const mergedPdf = await PDFDocument.create();

  const frontCover = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
  for (const page of frontCover) {
    mergedPdf.addPage(page);
  }

  const pdf2Pages = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());
  for (const page of pdf2Pages) {
    mergedPdf.addPage(page);
  }

  const backCover = await mergedPdf.copyPages(pdf3, pdf3.getPageIndices());
  for (const page of backCover) {
    mergedPdf.addPage(page);
  }

  fs.writeFileSync(`branded.pdf`, await mergedPdf.save());
}

mergePDFs();
