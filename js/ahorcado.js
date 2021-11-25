let pelicula = "LA CASA DE PAPEL"
let oculta = [];
var palabraOculta;
let intentos;
let gano;
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton1");



function iniciarJuego(){
    document.getElementById("boton0").setAttribute("disabled", true);
    intentos = 5;
    gano = false;
    let largo = pelicula.length;   
    for (let index = 0; index < largo; index++) {
       if(pelicula[index] == " "){
            oculta.push(" ");
       }else{
           oculta.push("+");
       }
    }
    palabraOculta = oculta.join('');
    document.getElementById("palabraOculta").innerHTML += palabraOculta;
    
}

function testerLetra(letra){
    let letraMayus = letra.toUpperCase();
    let res = false;
    for(let index = 0; index < pelicula.length; index++){
        if(pelicula[index] == letraMayus){
            oculta[index] = letraMayus;
            res = true;
        }
    }
    return res;
}

function intentoLetra(){
    let letra = document.getElementById("letra").value;
    console.log(letra);
    if(testerLetra(letra)){
        palabraOculta = oculta.join('');
        document.getElementById("palabraOculta").innerHTML = "";
        document.getElementById("palabraOculta").innerHTML += palabraOculta;     
        alert("BIEN, AUN TE QUEDAN "+ intentos); 
    }else{
        intentos--;
        alert("NOP, AHORA TIENES "+ intentos);
    }
    if(intentos == 0){
        alert("PERDISTE PETE DE MIERDA!!!")
    }else{
        if(palabraOculta == pelicula){
            intentos == 6;
            alert("GANASTE!! TAS RE PRO!!");
        }
    }
    evaluar();
}

function intentoPalabra(){
    let palabra = document.getElementById("palabra").value.toUpperCase();
    console.log(palabra);
    palabraOculta = palabra;
    if(palabraOculta != pelicula){
        alert("PERDISTE PETE DE MIERDA");
        intentos = 0;
    }else{
        alert("GANASTE!! TAS RE PRO!!");
        intentos = 6;
    }
    evaluar();
}

function evaluar(){
    if(intentos == 0 || intentos == 6){
        document.getElementById("boton0").removeAttribute("disabled");
        document.getElementById("boton1").setAttribute("disabled", true);
        document.getElementById("boton2").setAttribute("disabled", true);
    }
}
