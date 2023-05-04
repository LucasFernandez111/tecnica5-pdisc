/*window.onload = creacionDom();

function creacionDom(){
 const $ul = document.createElement("ul");

 
 for(let i =1; i<=3; i++){
const $li = document.createElement("li");
$ul.appendChild($li);
const $texto = document.createTextNode(`item ${i}`)
$li.appendChild($texto);

 }
 document.body.appendChild($ul);


}*/
const enlaces = ["https://www.microsoft.com","https://www.bing.com/","https://www.google.com"]

const etiquetas = ["Ir a microsoft","Ir a bing","Ir a google"]

window.onload = function (){
 const $h1 = document.createElement("h1");
 const $p = document.createElement("p");
 const $ol = document.createElement("ol");

 
 const $textH1 = document.createTextNode("Ejercicio DOM 1")
 const $textP1 = document.createTextNode("Modelo de objetos del Documento")
 $h1.appendChild($textH1);
 $p.appendChild($textP1);
 document.body.appendChild($h1);
 document.body.appendChild($p);
 for(let i=0; i<3; i++){
    const $li = document.createElement("li");
    const $a = document.createElement("a"); 
    $a.setAttribute('href',enlaces[i] );
    const $text = document.createTextNode(etiquetas[i])
    $a.appendChild($text);
    $li.appendChild($a);
    $ol.appendChild($li);
 }

 document.body.appendChild($ol);
 

}

