"use strict";
//obtener fecha y hora
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateCylce = void 0;
function DateCylce() {
    let d = new Date();
    const date = "Resumen_Ciclicos_GT" + "_" + d.getDay() + "_" + d.getMonth() + "_" + d.getFullYear();
    date.toString();
    return date;
}
exports.DateCylce = DateCylce;
