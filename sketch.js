function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
}

function draw() {

  background(0, 255, 0);



  ellipse(mouseX, mouseY, diametro, diametro);

  //asignacion a la variable diametro
  diametro = diametro + 1;




  //if(condicion) {}
  if (mouseX > width / 2) {
    background(5, 2, 4)
    muchasELipses(15);
  } else {
    background(4, 2, 5);
    muchasElipses(15);
  }

}
//variables
//variables son los lugares en el computador 
//donde podemos almacenar datos 

//para crear una variable, hay que DECLARARLA
//en javascrip se hace asi
//voy a declarar una variable que se llama x
var diametro;
//la declaracin se hace SOLO UNA VEZ 

//para darle un valor, se hace una ASIGNACION
//la asignacion se hace en javascrip con el signo =
diametro = 100;


//existen dos tipos de varibales
//las locales y las globales 
//la diferencia radica en donde son declaradas 

//las GLOBALES, FUERA de las FUNCIONES 
//las LOCALES, DENTRO de las FUNCIONES 

//las GLOBALES, pueden ser usadas en todas partes 
//las LOCALES, solo dentro de la funcion donde viven 

//las funciones son para ejecutar acciones 
//tambien tienen que ser declaradas 
//asi se declara una opcion en javascript
//escribir nuestra primera funcion
//funcion para definir el estilo
function estilo() {
  //definir estilo de la elipse
  //definir ancho del borde
  //strokeWeight(px);
  //si queremos que no dibuje el borde
  //noStroke();
  strokeWeight(10);

  //definir el color del borde
  //stroke(color);
  stroke(0, 0, 255, 255 / 2);

  //definir el color del relleno
  //fill(color);
  fill(255, 0, 0, 255 / 2);
}

//funcion para hacer muchas elipses 
function muchasELipses(cantidad) {

  //iteracion
  //for(inicio; condicion; refresco) {}
  for (var i = 0; i < cantidad; i = i++) {
    noStroke();
    fill(random(255), random(255), random(28), random(35));
    //dibujar una elipse en cualquier parte
    ellipse(random(width), random(height), 50, 50);

  }
}