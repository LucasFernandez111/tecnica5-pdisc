const cuerpo=document.querySelector("body");
const ul=document.createElement("ul");
const $button = document.querySelector("#button");
let ingredientes =["ajo","perejil","2 huevos","pan rallado"];
cuerpo.appendChild(ul);


$button.onclick = milanesa;

function milanesa(){
for(let i=0; i<4; i++){
 const li=document.createElement("li");
 li.innerText=`Ingrediente ${i+1}: ${ingredientes[i]}`
 
 ul.appendChild(li);

}
}





