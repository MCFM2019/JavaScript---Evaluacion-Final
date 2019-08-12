// Se crea la función principal
var Calculadora={
  iniciar:function(){
    var numAnterior,operacion;

    var numPantalla=document.getElementById("display");

    var reinicio=document.getElementById("on");
    var signo=document.getElementById("sign");
    var raiz=document.getElementById("raiz");
    var dividir=document.getElementById("dividido");
    var multiplicar=document.getElementById("por");
    var menos=document.getElementById("menos");
    var mas=document.getElementById("mas");
    var igual=document.getElementById("igual");
    var punto=document.getElementById("punto");

    var cero=document.getElementById("0");
    var uno=document.getElementById("1");
    var dos=document.getElementById("2");
    var tres=document.getElementById("3");
    var cuatro=document.getElementById("4");
    var cinco=document.getElementById("5");
    var seis=document.getElementById("6");
    var siete=document.getElementById("7");
    var ocho=document.getElementById("8");
    var nueve=document.getElementById("9");

    this.presionaTecla(reinicio,numPantalla,numAnterior,operacion);
    this.presionaTecla(signo,numPantalla,numAnterior,operacion);
    this.presionaTecla(raiz,numPantalla,numAnterior,operacion);
    this.presionaTecla(dividir,numPantalla,numAnterior,operacion);
    this.presionaTecla(multiplicar,numPantalla,numAnterior,operacion);
    this.presionaTecla(menos,numPantalla,numAnterior,operacion);
    this.presionaTecla(mas,numPantalla,numAnterior,operacion);
    this.presionaTecla(igual,numPantalla,numAnterior,operacion);
    this.presionaTecla(punto,numPantalla,numAnterior,operacion);

    this.presionaTecla(cero,numPantalla,numAnterior,operacion);
    this.presionaTecla(uno,numPantalla,numAnterior,operacion);
    this.presionaTecla(dos,numPantalla,numAnterior,operacion);
    this.presionaTecla(tres,numPantalla,numAnterior,operacion);
    this.presionaTecla(cuatro,numPantalla,numAnterior,operacion);
    this.presionaTecla(cinco,numPantalla,numAnterior,operacion);
    this.presionaTecla(seis,numPantalla,numAnterior,operacion);
    this.presionaTecla(siete,numPantalla,numAnterior,operacion);
    this.presionaTecla(ocho,numPantalla,numAnterior,operacion);
    this.presionaTecla(nueve,numPantalla,numAnterior,operacion);
  },
  presionaTecla:function (tecla,numPantalla,numAnterior,operacion){
    tecla.addEventListener('mousedown',function(){
      tecla.style.transform='scale(0.85,0.85)';
    })
    tecla.addEventListener('mouseup',function(){
      tecla.style.transform='scale(1,1)';
    })
    tecla.addEventListener('click',function(){
      var teclaPresionada=tecla.id;
      var numeroEnPantalla=numPantalla.innerHTML;
      // Se muestra el numero, dependiendo de la tecla, si no es un dígito, realiza la acción correspondiente
      switch (teclaPresionada){
        case 'on':
          numPantalla.innerHTML='0';
          break;
        case 'sign':
          if (numeroEnPantalla!='0'){
            numPantalla.innerHTML=parseFloat(numeroEnPantalla)*-1;
          }
          break;
        case 'raiz':
          //El botón de raiz cuadrada no hace nada
          break;
        case 'dividido':
          Calculadora.guardaValoresDeOperacion(numAnterior,numPantalla,teclaPresionada);
          break;
        case 'por':
          Calculadora.guardaValoresDeOperacion(numAnterior,numPantalla,teclaPresionada);
          break;
        case 'menos':
          Calculadora.guardaValoresDeOperacion(numAnterior,numPantalla,teclaPresionada);
          break;
        case 'mas':
          Calculadora.guardaValoresDeOperacion(numAnterior,numPantalla,teclaPresionada);
          break;
        case 'igual':

          break;
        case 'punto':

          break;
        case '0':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '1':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '2':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '3':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '4':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '5':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '6':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '7':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '8':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        case '9':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          break;
        default:

          break;
      }
    })
  },
  muestraNumeroEnPantalla:function(teclaPresionada,numPantalla){
    if (numPantalla.innerHTML.length<8){
      if (numPantalla.innerHTML=='0'){
          numPantalla.innerHTML=teclaPresionada;
      }
      else{
        numPantalla.innerHTML+=teclaPresionada;
      }
    }
  },
  guardaValoresDeOperacion:function(numAnterior,numPantalla,teclaPresionada){
    numAnterior=numPantalla.innerHTML;
    operacion=teclaPresionada;
    numPantalla.innerHTML='';
  }
}

Calculadora.iniciar();
