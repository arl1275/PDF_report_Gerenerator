import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFileSync } from "fs";
//import { DateCylce } from "./get_hours_format";

async function createPDF() {
    //const name_cycle = new Date().toISOString();
    const PDFdoc = await PDFDocument.create();
    const page = PDFdoc.addPage([300, 400]);
    writeFileSync("holis", await PDFdoc.save());
  }
  
createPDF().catch((err) => console.log(err));