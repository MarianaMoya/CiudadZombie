/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,//cantidad de pixeles que se mueve
  vidas: 20,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
}
  Jugador.mover = function(tecla){
    console.log(tecla);

    if(tecla === "izq"){
       this.x -= this.velocidad;
       this.sprite='imagenes/auto_rojo_izquierda.png';
       this.alto = 15;
       this.ancho = 30;
    }
    if(tecla === "der"){
       this.x += this.velocidad;
       this.sprite='imagenes/auto_rojo_derecha.png';
       this.alto = 15;
       this.ancho = 30;
    }    
    if(tecla === "arriba"){
       this.y -= this.velocidad;
       this.sprite='imagenes/auto_rojo_arriba.png';
       this.alto = 30;
       this.ancho = 15;
    }
    if(tecla === "abajo"){
       this.y += this.velocidad;
       this.sprite='imagenes/auto_rojo_abajo.png';
       this.alto = 30;
       this.ancho = 15;
    }
  }
  Jugador.perderVidas = function(potencia){ //potencia = vidas perdidas.
    this.vidas -= potencia;
  }
  