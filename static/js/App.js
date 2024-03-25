
const btntestear = document.querySelector("#testear")
const Reiniciar=document.querySelector("#limpiar")

//------------------------------------------------------
//para el reconocimiento mediante palabras---

var Zona_Solar_imagen;
var otherimagen;
var turns = 0;
//-----------------------------------------------------------------
//para el reconocimiento de imagenes


var mensaje=["Mostrar 5 + 8","si 5 mayor 9","mostar perro * 8","mostrar gato + carro"]
var posicion=0

var Id_paraSonaSolar=0
var Id_paraCadaimagen=8
var imagen;
const imagenBlanco="./static/imagenes/blank.png";

  
window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < 7; r++) {
        //<img>
        imagen = document.createElement("img");
        imagen.src = imagenBlanco
        Id_paraSonaSolar+=1
        imagen.id=Id_paraSonaSolar
        //funcionalidad de arrastre
        imagen.addEventListener("dragstart", dragStart); //click en la imagen para arrastrar
        imagen.addEventListener("dragover", dragOver);   //arrastrar imagen
        imagen.addEventListener("dragenter", dragEnter); //arrastrar una imagen a otra
        imagen.addEventListener("dragleave", dragLeave); //arrastrar una imagen lejos de otra
        imagen.addEventListener("drop", dragDrop);       //colocar una imagen sobre otra
        imagen.addEventListener("dragend", dragEnd);      //despues de completar dragDrop

        document.getElementById("board").append(imagen);
        
    }
    //piezas
    var pieces = [];
    for (let i=1; i <= 6*6; i++) {
        pieces.push(i.toString()); //poner "1" a "36" en la matriz (nombres de imágenes de rompecabezas)
    }

    for (i in pieces) {
        Id_paraCadaimagen++
        let imagen = document.createElement("img");
        imagen.src = "./static/imagenes/" + pieces[i] + ".jpg";
        imagen.id=Id_paraCadaimagen
        //console.log("cargar  ",guardar)
//--------------

        //funcionalidad de arrastre
        imagen.addEventListener("dragstart", dragStart); //click en la imagen para arrastrar
        imagen.addEventListener("dragover", dragOver);   //arrastrar imagen
        imagen.addEventListener("dragenter", dragEnter); //arrastrar una imagen a otra
        imagen.addEventListener("dragleave", dragLeave); //arrastrar una imagen lejos de otra
        imagen.addEventListener("drop", dragDrop);       //colocar una imagen sobre otra
        imagen.addEventListener("dragend", dragEnd);      //despues de completar dragDrop

        document.getElementById("pieces").append(imagen);

    }

    var cadenaToken=[]
    var CadenaFinal=[]
    const imagen_1 ="http://127.0.0.1:5501/static/imagenes/1.jpg"
    const imagen_2 ="http://127.0.0.1:5501/static/imagenes/2.jpg"
    const imagen_3 ="http://127.0.0.1:5501/static/imagenes/3.jpg"    
    const imagen_4 ="http://127.0.0.1:5501/static/imagenes/4.jpg"
    const imagen_5 ="http://127.0.0.1:5501/static/imagenes/5.jpg"
    const imagen_6 ="http://127.0.0.1:5501/static/imagenes/6.jpg"
    const imagen_7 ="http://127.0.0.1:5501/static/imagenes/7.jpg"
    const imagen_8 ="http://127.0.0.1:5501/static/imagenes/8.jpg"
    const imagen_9 ="http://127.0.0.1:5501/static/imagenes/9.jpg"
    const imagen_7_7 ="http://127.0.0.1:5501/static/imagenes/10.jpg"
    const imagen_suma ="http://127.0.0.1:5501/static/imagenes/11.jpg"
    const imagen_resta ="http://127.0.0.1:5501/static/imagenes/12.jpg"
    const imagen_multi ="http://127.0.0.1:5501/static/imagenes/13.jpg"
    const imagen_divi ="http://127.0.0.1:5501/static/imagenes/14.jpg"
    const imagen_igual ="http://127.0.0.1:5501/static/imagenes/15.jpg"
    const imagen_diferente ="http://127.0.0.1:5501/static/imagenes/16.jpg"
    const imagen_mayor ="http://127.0.0.1:5501/static/imagenes/17.jpg"
    const imagen_menor ="http://127.0.0.1:5501/static/imagenes/18.jpg"
    const imagen_Par_Abrir ="http://127.0.0.1:5501/static/imagenes/19.jpg"
    const imagen_Par_Cerrar ="http://127.0.0.1:5501/static/imagenes/20.jpg"
    const imagen_mostrar ="http://127.0.0.1:5501/static/imagenes/21.jpg"
    const imagen_no ="http://127.0.0.1:5501/static/imagenes/22.jpg"
    const imagen_si ="http://127.0.0.1:5501/static/imagenes/23.jpg"
    const imagen_si_no ="http://127.0.0.1:5501/static/imagenes/24.jpg"
    const imagen_pato ="http://127.0.0.1:5501/static/imagenes/25.jpg"
    const imagen_casa ="http://127.0.0.1:5501/static/imagenes/26.jpg"
    const imagen_arbol ="http://127.0.0.1:5501/static/imagenes/27.jpg"
    const imagen_conejo ="http://127.0.0.1:5501/static/imagenes/28.jpg"
    const imagen_abeja ="http://127.0.0.1:5501/static/imagenes/29.jpg"
    const imagen_auto ="http://127.0.0.1:5501/static/imagenes/30.jpg"
    const imagen_perro ="http://127.0.0.1:5501/static/imagenes/31.jpg"
    const imagen_hola ="http://127.0.0.1:5501/static/imagenes/32.jpg"
    const imagen_mundo ="http://127.0.0.1:5501/static/imagenes/33.jpg"
    const imagen_gato ="http://127.0.0.1:5501/static/imagenes/34.jpg"    
    const imagen_cierre ="http://127.0.0.1:5501/static/imagenes/35.jpg"    
    const imagen_0 ="http://127.0.0.1:5501/static/imagenes/36.jpg"    

    const Numeros=[imagen_1,imagen_2,imagen_3,imagen_4,imagen_5,imagen_6,imagen_7,imagen_8,imagen_9,imagen_7_7,imagen_0]
    const Operadores=[imagen_suma,imagen_resta,imagen_multi,imagen_divi,imagen_igual,imagen_diferente,imagen_mayor,imagen_menor]
    const Agrupadores=[imagen_Par_Abrir,imagen_Par_Cerrar]
    const PalabrasReservadas=[imagen_mostrar,imagen_no,imagen_si,imagen_si_no]
    const Cadenas=[imagen_pato,imagen_casa,imagen_arbol,imagen_conejo,imagen_abeja,imagen_auto,imagen_perro,imagen_hola,imagen_mundo,imagen_gato]
    const terminador=imagen_cierre

    var tokenpalabrasReservadas=0
    var tokennumeros=0
    var tokencadenas=0
    var tokenoperadores=0
    var tokenterminador=0
    var tokenAgrupadores=0

    var validar1 = false
    var validar2 = false
    var validar3 = false
    var validar4 = false
    var validar5 = false
    var validar6 = false
    var validar7 = false  

    const verificar=(casilla)=>{
        if (PalabrasReservadas.includes(casilla)){
            CadenaFinal.push(casilla)
            cadenaToken.push("PalabraReservada")
            tokenpalabrasReservadas++
        }else if(Numeros.includes(casilla)){
            CadenaFinal.push(casilla)
            cadenaToken.push("numeros")
            tokennumeros++
        }else if(Cadenas.includes(casilla)){
            CadenaFinal.push(casilla)
            cadenaToken.push("cadena")
            tokencadenas++
        }else if(Operadores.includes(casilla)){
            CadenaFinal.push(casilla)
            cadenaToken.push("Operador")
            tokenoperadores++
        }else if(terminador.includes(casilla)){
            CadenaFinal.push(casilla)
            cadenaToken.push("terminador")
            tokenterminador++
        }else if(Agrupadores.includes(casilla)){
            CadenaFinal.push(casilla)
            cadenaToken.push("Agrupador")
            tokenAgrupadores++
        }
        else{
            console.log("no es una palabra reservada")
        }
    }
    const Semantico=()=>{
        let celda1=document.getElementById("1")
        let celda2=document.getElementById("2")
        let celda3=document.getElementById("3")
        let celda4=document.getElementById("4")
        let celda5=document.getElementById("5")
        let celda6=document.getElementById("6")
        let celda7=document.getElementById("7")
        let sematico1=document.getElementById("45")
        let sematico2=document.getElementById("46")
        let sematico3=document.getElementById("47")
        let sematico4=document.getElementById("48")
        let sematico5=document.getElementById("49")
        let sematico6=document.getElementById("50")
        let sematico7=document.getElementById("51")
        let sematico8=document.getElementById("52")

// SUMA
        if(((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1))){
            sematico1.src=imagen_1
        }else if(((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2))){
            sematico1.src=imagen_2
        }else if(((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3))){
            sematico1.src=imagen_3
        }else if(((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4))){
            sematico1.src=imagen_4
        }else if(((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1)) || 
        ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0))){
            sematico1.src=imagen_5
        }else if(((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || 
        ((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1)) ||
        ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2))){
            sematico1.src=imagen_6
        }else if(((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || 
        ((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1)) ||
        ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3))){
            
            sematico1.src=imagen_7
        }else if(((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8)) || ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || 
        ((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1)) ||
        ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3))){
            sematico1.src=imagen_8

        }else if(((celda3.src==imagen_0) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_0)) || 
        ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3)) ||
        ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) ||
        ((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8)) || ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1))){
            sematico1.src=imagen_9

        }else if(((celda3.src==imagen_1) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_1)) || 
        ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8)) || ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3)) ||
        ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4))){
            sematico1.src=imagen_1
            sematico2.src=imagen_0

        }else if(((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || 
        ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8)) ||
        ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) ||
        ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6))){
            sematico1.src=imagen_1
            sematico2.src=imagen_1

        }else if(((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || 
        ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8)) ||
        ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7))){
            sematico1.src=imagen_1
            sematico2.src=imagen_2

        }else if(((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || 
        ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8)) ||
        ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7))){
            sematico1.src=imagen_1
            sematico2.src=imagen_3

        }else if(((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || 
        ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma) && (celda5.src==imagen_8))){
            sematico1.src=imagen_1
            sematico2.src=imagen_4
        
        }else if(((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9)) || 
        ((celda3.src==imagen_8) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_8))){
            sematico1.src=imagen_1
            sematico2.src=imagen_5
        }else if(((celda3.src==imagen_9) && (celda4.src==imagen_suma)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_suma)&& (celda5.src==imagen_9))){
            sematico1.src=imagen_1
            sematico2.src=imagen_6

// RESTA
        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_1
        
        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1
        
        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2
        
        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_3

        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_4
        
        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_5
        
        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_6

        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_7

        }else if((celda3.src==imagen_1) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_8

        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_1
        
        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1
        
        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2

        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_3
        
        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_4

        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_5

        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_6

        }else if((celda3.src==imagen_2) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_7
        
        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_2

        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_1

        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1
        
        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2

        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_3

        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_4

        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_5

        }else if((celda3.src==imagen_3) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_6
        
        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_4

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_3

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_2

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_1

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_0

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2
        
        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_3

        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_4
        
        }else if((celda3.src==imagen_4) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_5

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_5

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_4

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_3

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_2

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_1

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_0

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1
        
        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2

        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_3
        
        }else if((celda3.src==imagen_5) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_4

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_6

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_5

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_4

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_3

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_2

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_1

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_0
        
        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1

        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2
        
        }else if((celda3.src==imagen_6) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_3
        
        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_7

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_6

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_5

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_4

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_3

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_2

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_1
        
        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_0

        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1
        
        }else if((celda3.src==imagen_7) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_2

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_8

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_7

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_6

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_5

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_4

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_3

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_2
        
        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_1

        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_0
        
        }else if((celda3.src==imagen_8) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_resta
            sematico2.src=imagen_1

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_0)){
            sematico1.src=imagen_9

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_1)){
            sematico1.src=imagen_8

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_2)){
            sematico1.src=imagen_7

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_3)){
            sematico1.src=imagen_6

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_4)){
            sematico1.src=imagen_5

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_5)){
            sematico1.src=imagen_4

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_6)){
            sematico1.src=imagen_3
        
        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_7)){
            sematico1.src=imagen_2

        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_8)){
            sematico1.src=imagen_1
        
        }else if((celda3.src==imagen_9) && (celda4.src==imagen_resta) && (celda5.src==imagen_9)){
            sematico1.src=imagen_0

// MULTIPLICACION
        
        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1)) || 
        ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) ||
        ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4)) ||
        ((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5)) ||
        ((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) ||
        ((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7)) ||
        ((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8)) ||
        ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_0)) || ((celda3.src==imagen_0) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9))) {
            sematico1.src = imagen_0
        
        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))) {
            sematico1.src = imagen_2
        
        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))) {
            sematico1.src = imagen_3

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))) {
            sematico1.src = imagen_4
        
        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))) {
            sematico1.src = imagen_5

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1)) ||
        ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2))) {
            sematico1.src = imagen_6

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))) {
            sematico1.src = imagen_7

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8)) || ((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1)) ||
        ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2))) {
            sematico1.src = imagen_8

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))) {
            sematico1.src = imagen_9

        }else if
        (((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2))) {
            sematico1.src = imagen_1
            sematico2.src = imagen_0

        }else if
        (((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) ||
        ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4))) {
            sematico1.src = imagen_1
            sematico2.src = imagen_2

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_1
            sematico2.src = imagen_4

        }else if
        (((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3))) {
            sematico1.src = imagen_1
            sematico2.src = imagen_5

        }else if
        (((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) ||
        ((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8))) {
            sematico1.src = imagen_1
            sematico2.src = imagen_6

        }else if
        (((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2))) {
            sematico1.src = imagen_1
            sematico2.src = imagen_8

        }else if
        (((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4))) {
            sematico1.src = imagen_2
            sematico2.src = imagen_0

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_2
            sematico2.src = imagen_1

        }else if
        (((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) ||
        ((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8))) {
            sematico1.src = imagen_2
            sematico2.src = imagen_4

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_2
            sematico2.src = imagen_8

        }else if
        (((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_3) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9))) {
            sematico1.src = imagen_2
            sematico2.src = imagen_7

        }else if
        (((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5))) {
            sematico1.src = imagen_3
            sematico2.src = imagen_0

        }else if
        (((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4)) || ((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8))) {
            sematico1.src = imagen_3
            sematico2.src = imagen_2

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_3
            sematico2.src = imagen_5

        }else if
        (((celda3.src==imagen_4) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_4))) {
            sematico1.src = imagen_3
            sematico2.src = imagen_6

        }else if
        (((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8)) || ((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5))) {
            sematico1.src = imagen_4
            sematico2.src = imagen_0

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_4
            sematico2.src = imagen_2

        }else if
        (((celda3.src==imagen_5) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_5))) {
            sematico1.src = imagen_4
            sematico2.src = imagen_5

        }else if
        (((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6)) || ((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8))) {
            sematico1.src = imagen_4
            sematico2.src = imagen_8

        }else if
        (((celda3.src==imagen_6) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_6))) {
            sematico1.src = imagen_5
            sematico2.src = imagen_4

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8)) || ((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_5
            sematico2.src = imagen_6

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_7))) {
            sematico1.src = imagen_6
            sematico2.src = imagen_3

        }else if
        (((celda3.src==imagen_8) && (celda4.src==imagen_multi)&& (celda5.src==imagen_9)) || ((celda3.src==imagen_9) && (celda4.src==imagen_multi)&& (celda5.src==imagen_8))) {
            sematico1.src = imagen_7
            sematico2.src = imagen_2

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))){ 
            sematico1.src = imagen_2

        }else if
        (((celda3.src==imagen_1) && (celda4.src==imagen_multi)&& (celda5.src==imagen_2)) || ((celda3.src==imagen_2) && (celda4.src==imagen_multi)&& (celda5.src==imagen_1))){ 
            sematico1.src = imagen_2

// DIVISION
        }else if
        (((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1)) || ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_4)) ||
        ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_5)) || ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_6)) ||
        ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_7)) || ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_8)) ||
        ((celda3.src==imagen_0) && (celda4.src==imagen_divi)&& (celda5.src==imagen_9))){ 
            sematico1.src = imagen_0

        }else if
        (((celda3.src==imagen_2) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1)) || ((celda3.src==imagen_4) && (celda4.src==imagen_divi)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_6) && (celda4.src==imagen_divi)&& (celda5.src==imagen_3)) || ((celda3.src==imagen_9) && (celda4.src==imagen_divi)&& (celda5.src==imagen_3))){
            sematico1.src = imagen_2

        }else if
        (((celda3.src==imagen_3) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1)) || ((celda3.src==imagen_6) && (celda4.src==imagen_divi)&& (celda5.src==imagen_2)) ||
        ((celda3.src==imagen_9) && (celda4.src==imagen_divi)&& (celda5.src==imagen_3))){
            sematico.src = imagen_3
        
        }else if
        (((celda3.src==imagen_4) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1)) || ((celda3.src==imagen_8) && (celda4.src==imagen_divi)&& (celda5.src==imagen_2))){
            sematico1.src = imagen_4

        }else if
        (((celda3.src==imagen_5) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1))){
            sematico1.src = imagen_5

        }else if
        (((celda3.src==imagen_6) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1))){
            sematico1.src = imagen_6

        }else if
        (((celda3.src==imagen_7) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1))){
            sematico1.src = imagen_7

        }else if
        (((celda3.src==imagen_8) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1))){
            sematico1.src = imagen_8

        }else if
        (((celda3.src==imagen_9) && (celda4.src==imagen_divi)&& (celda5.src==imagen_1))){
            sematico1.src = imagen_9
       

// COMPARACION
        }else if(((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7_7)) || ((celda1.src==imagen_si) && (celda3.src==imagen_7_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7))){
            sematico1.src="./static/imagenes/verdadero.jpg"
        
        }else if(((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7_7)) || ((celda1.src==imagen_no) && (celda3.src==imagen_7_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7))){
            sematico1.src="./static/imagenes/falso.jpg"

// SUMANDO STRING
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_mundo))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_pato))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_casa))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_arbol))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_conejo))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_abeja))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_auto))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_perro))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_hola
        }else if(((celda3.src==imagen_hola) && (celda4.src==imagen_suma)&& (celda5.src==imagen_gato))){
            sematico1.src=imagen_hola
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_hola))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_hola

        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_pato
        }else if(((celda3.src==imagen_pato) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_pato
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_pato))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_pato

        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_casa
        }else if(((celda3.src==imagen_casa) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_casa
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_casa))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_casa
        
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_arbol
        }else if(((celda3.src==imagen_arbol) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_arbol
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_arbol))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_arbol

        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_conejo
        }else if(((celda3.src==imagen_conejo) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_conejo
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_conejo))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_conejo
        
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_abeja
        }else if(((celda3.src==imagen_abeja) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_abeja
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_abeja))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_abeja

        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_auto
        }else if(((celda3.src==imagen_auto) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_auto
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_auto))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_auto

        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_mundo
        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_perro
        }else if(((celda3.src==imagen_perro) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_perro
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_perro))){
            sematico1.src=imagen_gato 
            sematico2.src=imagen_perro

        }else if(((celda3.src==imagen_mundo) && (celda4.src==imagen_suma) && (celda5.src==imagen_gato))){
            sematico1.src=imagen_mundo
            sematico2.src=imagen_gato
        }else if(((celda3.src==imagen_gato) && (celda4.src==imagen_suma) && (celda5.src==imagen_mundo))){
            sematico1.src=imagen_gato
            sematico2.src=imagen_mundo
        

        
// CONDICIONALES
        }else if(((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) ||   
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_8) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/verdadero.jpg"
        
        }else if(((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_menor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_menor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_8) && (celda4.src==imagen_menor)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/falso.jpg"

        }else if(((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_8) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/verdadero.jpg"
        }else if(((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_8) && (celda4.src==imagen_mayor)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/falso.jpg"


        }else if(((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_8) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/falso.jpg"

        }else if(((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_igual)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_8) && (celda4.src==imagen_igual)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/verdadero.jpg"
        
        }else if(((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_6) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_7) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_si) && (celda3.src==imagen_8) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/verdadero.jpg"
        
        }else if(((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_1)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_2)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_3)) ||
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_0) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_2)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_1) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_3)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_2) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_4)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_3) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_5)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_4) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_6)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_5) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_7)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_6) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_8)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_7) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9)) || 
        ((celda1.src==imagen_no) && (celda3.src==imagen_8) && (celda4.src==imagen_diferente)&& (celda5.src==imagen_9))){
            sematico1.src="./static/imagenes/falso.jpg"
        }
        
        else{
            sematico1.src==imagenBlanco
        }
        
        // if (celda3.src==imagen_1 && celda4.src==imagen_suma && celda4.src==imagen_0){
        //     sematico1.src="./imagenes/1.jpg"
        //     console.log(imagen_1)
        // }
        // console.log(sematico1)
        // sematico1=imagen1 
    }
    const Sintactico=()=>{
        if(PalabrasReservadas.includes(CadenaFinal[0])){
            validar1=true
        }if(CadenaFinal[1]==Agrupadores[0]){
            validar2=true
        }if(Cadenas.includes(CadenaFinal[2]) || Numeros.includes(CadenaFinal[2])){
            validar3=true
        }if(Operadores.includes(CadenaFinal[3])){
            validar4=true
        }if(Cadenas.includes(CadenaFinal[4]) || Numeros.includes(CadenaFinal[4])){
            validar5=true
        }if(CadenaFinal[5]==Agrupadores[1]){
            validar6=true
        }if ((CadenaFinal[CadenaFinal.length -1])==terminador){
            validar7=true
           
        }if(validar1==true && validar2==true && validar3==true && validar4==true && validar5==true && validar6==true && validar7==true){
            document.getElementById("analizando").style.color="rgb(25, 244, 1)"
            document.getElementById("analizando").innerText="La sintaxis es correcta"
            Semantico()

        }else{
            document.getElementById("analizando").innerText="Lo siento la sintaxis es incorrecta"
            document.getElementById("analizando").style.color="red"
            // Semantico()
           
            
        }
    }



    btntestear.addEventListener("click",function (){   
        var sematico1=document.getElementById("45")
        var sematico2=document.getElementById("46")
        var sematico3=document.getElementById("47")
        var sematico4=document.getElementById("48")
        var sematico5=document.getElementById("49")
        var sematico6=document.getElementById("50")
        var sematico7=document.getElementById("51")
        var sematico8=document.getElementById("52")

        sematico1.src = imagenBlanco
        sematico2.src = imagenBlanco
        sematico3.src = imagenBlanco
        sematico4.src = imagenBlanco
        sematico5.src = imagenBlanco
        sematico6.src = imagenBlanco
        sematico7.src = imagenBlanco
        sematico8.src = imagenBlanco
         
        for (let i=1;i<=7;i++){
            verificar(document.getElementById(`${i}`).src)
        }
        
        Sintactico()
        
        document.getElementById("numeros").innerText=tokennumeros
        document.getElementById("operadores").innerText=tokenoperadores
        document.getElementById("palReservadas").innerText=tokenpalabrasReservadas
        document.getElementById("cadenas").innerText=tokencadenas
        document.getElementById("agrupadores").innerText=tokenAgrupadores
        document.getElementById("terminadores").innerText=tokenterminador
        console.log(cadenaToken)
        
        tokenpalabrasReservadas=0
        tokennumeros=0
        tokencadenas=0
        tokenoperadores=0
        tokenterminador=0
        tokenAgrupadores=0



        
    })
    Reiniciar.addEventListener("click",function(){
        window.location.reload()
    })
}

function AbrirSiguientePagina(){
    console.log("Enviando formulario...")

    return false;
}


//arrastrar imagenes
function dragStart() {
    Zona_Solar_imagen = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherimagen = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (Zona_Solar_imagen.src.includes("blank")) {
        return;
    }
    let currImg = Zona_Solar_imagen.src;
    let otherImg = otherimagen.src;
    Zona_Solar_imagen.src = otherImg;
    otherimagen.src = currImg;

    // turns += 1;
    // document.getElementById("turns").innerText = turns;
}


var sound=new Audio()
sound.src= "./static/audio/efecto.mp3";
var sonido=new Audio()
sonido.src= "./static/audio/audio2.mp3";