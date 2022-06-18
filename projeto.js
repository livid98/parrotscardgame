
let numcartas=0

let gifs = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot"]

 function iniciar(){
 let numcartas = prompt("Com Quantas cartas você quer jogar?Apenas números pares e até 14.")
 numcartas = Number(numcartas);
 if(isNaN(Number(numcartas))===true || numcartas<4 || numcartas>14 || numcartas%2 !==0) {
 alert ("Número inválido. Siga os requisitos.");
 }

  let gifsnum = [];
  for(let index=0; index<numcartas/2; index++){
   gifsnum.push(gifs[index]);
   gifsnum.push(gifs[index]);
  }
  gifsnum.sort(comparador);

 function addcartas(){
  for(let i=0; i<numcartas; i++){
  let cartas =  `<div class="carta">
  <img src="img\${gifsnum[i]}.gif" alt="">
 </div>` ; 
  document.querySelector(".conteudo").innerHTML += cartas

  }

}

 }
 iniciar();
addcartas(numcartas);
 