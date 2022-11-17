let autos = [
    {
        marca : "Ford",
        modelo :"Fiesta",
        precio :150000,
        km : 200,
        color :"Azul",
        cuotas : 12,
        anio : 2019,
        patente : "APL123",
        vendido : false,
    },
    {
        marca : "Toyota",
        modelo : "Corolla",
        precio : 100000,
        km : 0,
        color : "Blanco",
        cuotas : 14,
        anio : 2019,
        patente : "JJK16",
        vendido : false, 
    },
    {
        marca : "Fiat",
        modelo :"Uno",
        precio :200000,
        km : 200,
        color :"Azul",
        cuotas : 12,
        anio : 2019,
        patente : "JVV401",
        vendido : false,
    },
];
module.exports = autos;
/*
function venta (){
    let acum=0;

    for(let i = 0; i < autos.length; i++){
        let guardo = autos[i];
        if(guardo.vendido == true){
            acum = acum + guardo.precio;
        }
        
    }
    return acum;
}
console.log(venta());*/