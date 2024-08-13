// Variáveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raiobolinha = diametro/2;
let superiorbolinha = ybolinha - raiobolinha;
let inferiorbolinha = ybolinha + raiobolinha;
let esquerdabolinha = xbolinha - raiobolinha;
let direitabolinha = xbolinha + raiobolinha;

//Velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

//Variáveis da raquete
let xraquete = 5;
let yraquete = 200 - 45
let comprimentoraquete = 10;
let alturaraquete = 90;
let esquerdaraquete = xraquete;
let direitaraquete = xraquete + comprimentoraquete;
let superiorraquete = yraquete;
let infeiorraquete = yraquete + alturaraquete;

//Variáveis raquete oponente
let xraqueteoponente = 580
let yraqueteoponente = 200 - 45
let velocidadeyoponente;
let chancedeerrar = 0;


//Placar do jogo
let meuspontos = 0;
let pontosdooponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(00);
  mostrabolinha();
  movimentabolinha();
  colisaocomaborda();
  mostraraquete(xraquete, yraquete);
  movimentaminharaquete();
  mostraraquete(xraqueteoponente, yraqueteoponente);
  movimentaraqueteoponente();
  //verificacolisaoraquete();
  verificacolisaoraquete(xraquete,yraquete);
  verificacolisaoraquete(xraqueteoponente,yraqueteoponente);
  incluiplacar();
  marcaponto();
  //bolinhaNaoFicaPresa();
}


function mostrabolinha()
  {  circle(xbolinha,ybolinha,diametro);}

function movimentabolinha()
  { xbolinha += velocidadexbolinha;
    ybolinha += velocidadeybolinha;
  }

function colisaocomaborda()
  {if (xbolinha > width - raiobolinha || xbolinha - raiobolinha < 0)
    {velocidadexbolinha *= -1};
  if (ybolinha > height - raiobolinha || ybolinha - raiobolinha < 0)
    {velocidadeybolinha *= -1};}

function mostraraquete(x,y)
  {rect(x, y, comprimentoraquete, alturaraquete);}



function movimentaminharaquete()
  {if (keyIsDown(UP_ARROW)) {yraquete -= 10;}
  if (keyIsDown(DOWN_ARROW)) {yraquete += 10;}
  yraquete = constrain(yraquete, 10, 310);
  }

function movimentaraqueteoponente(){
    velocidadeyoponente = ybolinha - yraqueteoponente - comprimentoraquete/2 -30;
  yraqueteoponente += velocidadeyoponente + chancedeerrar;
  calculachancedeerrar()
 yraqueteoponente = constrain(yraqueteoponente, 10, 310);
}

function calculachancedeerrar() {
  if (pontosdooponente >= meuspontos) {
    chancedeerrar += 1
    if (chancedeerrar >= 39){
    chancedeerrar = 40
    }
  } else {
    chancedeerrar -= 1
    if (chancedeerrar <= 35){
    chanceeeerrar = 35
    }
  }
}

//function movimentaraqueteoponente()
//  {if (keyIsDown(87)) {yraqueteoponente -= 10;}
//  if (keyIsDown(83)) {yraqueteoponente += 10;}
//  yraqueteoponente = constrain(yraqueteoponente, 10, 310);
//  }

function verificacolisaoraquete(){
  if (xbolinha - raiobolinha < xraquete + comprimentoraquete
&& ybolinha - raiobolinha < yraquete + alturaraquete 
&& ybolinha + raiobolinha > yraquete){
      velocidadexbolinha *= -1;
  }
}

function verificacolisaoraquete(x,y){
  colidiu = collideRectCircle(x, y, comprimentoraquete, alturaraquete, xbolinha, ybolinha, raiobolinha);
  if (colidiu){
  velocidadexbolinha *= -1;
  raquetada.play();
  }
}

function incluiplacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,40,0));
  rect(150,10,40,20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255,40,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosdooponente, 470, 26);
  }

function marcaponto(){
  if (xbolinha > 590){
    meuspontos += 1;
    ponto.play();
  }
  if (xbolinha < 10){
  pontosdooponente += 1;
  ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
  if (xbolinha - raiobolinha < 0){
  xbolinha = 23;
  }
  if (xbolinha + raiobolinha > 600){
  xbolinha = 583; 
  }
}



    
