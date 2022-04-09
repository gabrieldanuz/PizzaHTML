'use strict';

// variáveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabressa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

// eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e){
  if(document.getElementById('mussarela').checked){
    somaMussarela = somaMussarela + 1;
    vendaMussarela = vendaMussarela + 25.00;
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela;
  }else if(document.getElementById('mista').checked){
    somaMista = somaMista + 1;
    vendaMista = vendaMista + 25.00;
    document.getElementById('resultadoMista').innerHTML = somaMista;
    document.getElementById('vendaMista').innerHTML = vendaMista;
  }else if(document.getElementById('calabresa').checked){
    somaCalabressa = somaCalabressa + 1;
    vendaCalabresa = vendaCalabresa + 25.00;
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabressa;
    document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa;
  }
}

function estorno(e){
  if(document.getElementById('mussarela').checked){
    somaMussarela = somaMussarela - 1;
    vendaMussarela = vendaMussarela - 25.00;
    if(somaMussarela < 0) {
      somaMussarela = 0;
      vendaMussarela = 0.00;
    }
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela;
  }else if(document.getElementById('mista').checked){
    somaMista = somaMista - 1;
    vendaMista = vendaMista - 25.00;
    if(somaMista < 0) {
      somaMista = 0;
      vendaMista = 0.00;
    }
    document.getElementById('resultadoMista').innerHTML = somaMista;
    document.getElementById('vendaMista').innerHTML = vendaMista;
  }else if(document.getElementById('calabresa').checked){
    somaCalabressa = somaCalabressa - 1;
    vendaCalabresa = vendaCalabresa - 25.00;
    if(somaCalabressa < 0) {
      somaCalabressa = 0;
      vendaCalabresa = 0.00;
    }
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabressa;
    document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa;
  }
}

function planilha(e){
  TableToExcel.convert(document.getElementById('table'));
}