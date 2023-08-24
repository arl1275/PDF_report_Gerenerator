import { DateCylce } from "./get_hours_format";
const fs = require("fs")
const PDFDocument = require("pdfkit-table");//pdf and table

const doc = new PDFDocument();
const name_cycle = DateCylce();
doc.pipe(fs.createWriteStream( name_cycle + '.pdf'));
doc.addPage().fontSize(25).text('Here is some vector graphics...', 100, 100);


// Draw a triangle
doc.save();
doc.end();