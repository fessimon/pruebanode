/* requerir módulo autos */
let autosImportados = require("./autos");

let personas = require("./persona.js");
 

//console.log(concesionaria);

const concesionaria = {
        autos: autosImportados,
        persona : personas,
      
        buscarAuto : function(patente){
            let busqueda = this.autos;
    
            for(let i = 0; i < busqueda.length; i++){
                let guardado = busqueda[i];

                if(guardado.patente == patente){
                    return busqueda[i];
                }
                
            } 
            return null;
        },
        venderAuto : function(patente){
            let busquedaAnterior = this.buscarAuto(patente);

            if(busquedaAnterior != null){
                busquedaAnterior.vendido = true;
                return busquedaAnterior;
                
            }else{
                return "auto no encontrado"
            }
        },
        autosParaLaVenta : function(){

            let hacerFiltrado = this.autos.filter(function(vendido){
                return vendido.vendido == false;
            })
            return hacerFiltrado;

        },
        autosNuevos : function(){
            let hacerFiltrado = this.autosParaLaVenta().filter(function(vendido){/*reutilizo la funcion
            en este caso no olvides los parentesis de la funcion BOLUDOOOOO!!!*/
                return vendido.km <= 100 && vendido.vendido == false; //HAGO DOS PREGUNTAS ES VALIDO!!
            })
            return hacerFiltrado;
        },
        /*listaDeVentas : function (){
            let hacerFiltroPlataGanada = this.venderAuto();
            let acum=0;

            for(let i = 0; i < hacerFiltroPlataGanada.length; i++){
                let guardo = hacerFiltroPlataGanada[i];
                acum = acum + guardo.precio;
            }
             return acum;           
        }*/
        listaDeVentas : function (){
            let hacerFiltrado = this.autos.filter(function(vendido){
                return vendido.vendido == true; 
            })
            let mapear = hacerFiltrado.map(function(num){
                return num.precio;
            })
            return mapear;
        },
        totalDeVentas : function(){
            //let ini=0;
            let totalVendidosPlata = this.listaDeVentas().reduce((ini, precioTotal) => ini+=precioTotal);



            if(totalVendidosPlata !=0){
                return totalVendidosPlata;
            }else {
                return " ";
            }
        },
        puedeComprar: function(auto, persona){
            
            if(auto.precio <= persona.capacidadDePagoTotal && (persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas)){
                   return true;
               }else{
                   return false;
               }
        },
        autosQuePuedeComprar: function(persona) {
            let autosVenta = this.autosParaLaVenta();
            return autosVenta.filter(function(elem) {
               return this.puedeComprar(elem, persona)
            }, this)
         }
        
}
        
console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.venderAuto("JVV401"));
console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
//console.log((concesionaria.puedeComprar([0][1])));
