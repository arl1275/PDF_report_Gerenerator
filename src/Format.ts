//Headers formats
export let titles = [
    "SUCURSALES", "Teoricos", "Escaneados", "Diferencia (+)", "Diferencia (-)"
    , "Teoricos", "Escaneados", "Diferencia (+)", "Diferencia (-)",
    , "Teoricos", "Escaneados", "AJUSTES (+)", "AJUSTES (-)"
]

//get dates and names
export function get_name(){
    let date = new Date();
    let generic_name = "Resumen_Diario_CiclicosGT_"

    let name = generic_name + date.getDay().toString() + "_" + date.getMonth().toString() + "_" 
    + date.getFullYear().toString()

    //return the name
    return name;
}
