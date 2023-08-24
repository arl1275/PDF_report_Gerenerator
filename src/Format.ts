//obtener fecha y hora

export function DateCylce(){
    let d = new Date();
    const date ="Resumen_Ciclicos_GT"+"_" + d.getDay() +"_"+ d.getMonth() +"_"+ d.getFullYear();
    date.toString();
    return date;
}   

export function Table_format_void_default(){//create the table to pdf, but table is void.
    

}
