const pdfdoc = require("./Table")
let PdfDocument = require('pdfkit');
const fs = require("fs");

const pdf = new PdfDocument();
pdf.addPage(pdfdoc);
pdf.pipe(fs.createWriteStream("output.pdf"));
pdf.end();
