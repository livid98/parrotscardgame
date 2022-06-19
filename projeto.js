let numcartas = 0;
let contador = 0;
let fixas = 0;
let gifs = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
  
 function iniciar() {
 numcartas = prompt("Com Quantas cartas você quer jogar?Apenas números pares e até 14.");
  numcartas = Number(numcartas);
  if(isNaN(Number(numcartas))===true || numcartas<4 || numcartas>14 || numcartas%2 !==0) {
   alert ("Número inválido. Siga os requisitos.");
   iniciar();
    }
   }  
  iniciar();
 function separar() {
  gifsnum = [];
  numcartas = numcartas / 2
  c = 0
  while (c < numcartas) {
    gifsnum.push(gifs[c]);
    gifsnum.push(gifs[c]);
    c++
  }
   gifsnum = gifsnum.sort(comparador);
   
}

function comparador() { 
	return Math.random() - 0.5; 
}


separar()

  function addcartas(){
    numcartas=numcartas*2;
   for(let i=0; i<numcartas; i++){
  let cartas =`<div class="carta" onclick="clicar(this)">
  <div class="costas face">
      <div><img src="front.png" alt=""></div>
</div>
  <div class="frente face">
      <div><img class="gif" src="${gifsnum[i]}.gif" alt=""></div>
  </div>
 
</div>`;
 
   document.querySelector(".conteudo").innerHTML += cartas;

  }
  clicar();
  }
  
  addcartas();

  function clicar(elemento){
      contador ++;
      let selecionados = document.querySelectorAll(".selecionado");
       if(selecionados.length <= 1){
        elemento.classList.add("selecionado");
      }
      perai();
  }
    function  perai() {
      let selecionados = document.querySelectorAll(".selecionado");
      if (selecionados.length == 2) {setTimeout (comparar,1500)
        
      }

      }
 function comparar(){
  let selecionados = document.querySelectorAll(".selecionado");
  if (selecionados.length == 2) {
    let carta1 = selecionados[0].querySelector(".gif");
    let carta2 = selecionados[1].querySelector(".gif");
    carta1 = carta1.currentSrc;
    carta2 = carta2.currentSrc;
    if (carta1 == carta2) {
      selecionados[0].classList.add("fixa");
      selecionados[1].classList.add("fixa");
      selecionados[0].classList.remove("selecionado");
      selecionados[1].classList.remove("selecionado");
      fixas = fixas + 2
    } else { selecionados[0].classList.remove("selecionado");
    selecionados[1].classList.remove("selecionado");
    }
  }
  ganhou (); 
 }
 function ganhou(){
  if(numcartas==fixas){
    alert (`Você ganhou em ${contador} jogadas!`)
  }
 }