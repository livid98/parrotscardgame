

let gifs = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];

 function iniciar() {
 numcartas = prompt("Com Quantas cartas você quer jogar?Apenas números pares e até 14.");
  numcartas = Number(numcartas);
  if(isNaN(Number(numcartas))===true || numcartas<4 || numcartas>14 || numcartas%2 !==0) {
   alert ("Número inválido. Siga os requisitos.");
    numcartas= 0;
   iniciar();
    }
    addcartas ();
   }  
      
  //  let gifsnum = [];
  // for(let index=0; index<numcartas/2; index++){
  //  gifsnum.push(gifs[index]);
  //   gifsnum.push(gifs[index]);
  // }
//   gifsnum.sort(comparador);

  function addcartas(){
   for(let i=0; i<numcartas; i++){
  let cartas = `<div class="frente face">
  <img src="front.png" alt="">
 </div> <div class="tras face">
   <img src="img/${gifs[i]}.gif" alt="">
  </div>` ; 
   document.querySelector(".conteudo").innerHTML += cartas;

  }

  }