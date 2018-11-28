// MODELO
var array=[];
var array2 = [];
class Nota{
	constructor(titulo,texto){
		this.titulo = titulo;
		this.texto = texto;
		this.fecha = new Date();
	}
}

// VISTA
function vistaNota(nota){
	 var divRaiz = document.createElement("div");
	divRaiz.setAttribute("class","nota");
	var titulo = document.createElement("h1");
	titulo.appendChild(document.createTextNode(nota.titulo));
	var texto = document.createElement("h2");
	texto.appendChild( document.createTextNode(nota.texto));
	var hora = document.createElement("h3");
	var horaFormateada= new Date(nota.fecha);
	hora.appendChild( document.createTextNode(horaFormateada)) ;
	divRaiz.appendChild(titulo);
	divRaiz.appendChild(texto);
	divRaiz.appendChild(hora);
	return divRaiz;
}
function iniciar(){
	if(localStorage.getItem("notas")){
		 array = JSON.parse(localStorage.getItem("notas"));
		for(var i=0;i<array.length;i++){
	document.getElementById("vista").appendChild(vistaNota(array[i]));
}
	}

}



function anadirNota(){
	var titulo = document.getElementById("titulo").value;
	var texto = document.getElementById("texto").value;	
    var nota = new Nota(titulo,texto);
	array2.push(nota);


for(var i=0;i<array2.length;i++){
	document.getElementById("vista").appendChild(vistaNota(array2[i]));
}
array = array.concat(array2);
localStorage.setItem("notas", JSON.stringify(array));

}