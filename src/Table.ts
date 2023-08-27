const { PDFDocument } = require("pdfkit-table-ts");
const fs = require('fs');

export const table = {
  headers: ["Country Country Country", "Conversion rate", "Trend"],
  rows: [
    ["Switzerland", "12%", "+1.12%"],
    ["France", "67%", "-0.98%"],
    ["England", "33%", "+4.44%"],
  ],
};