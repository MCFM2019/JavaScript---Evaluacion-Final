// Se crea la función principal
var Calculadora={
  numAnterior: '',
  operacion: '',
  teclaPrevia: '',

  iniciar:function(){
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

    this.presionaTecla(reinicio,numPantalla);
    this.presionaTecla(signo,numPantalla);
    this.presionaTecla(raiz,numPantalla);
    this.presionaTecla(dividir,numPantalla);
    this.presionaTecla(multiplicar,numPantalla);
    this.presionaTecla(menos,numPantalla);
    this.presionaTecla(mas,numPantalla);
    this.presionaTecla(igual,numPantalla);
    this.presionaTecla(punto,numPantalla);

    this.presionaTecla(cero,numPantalla);
    this.presionaTecla(uno,numPantalla);
    this.presionaTecla(dos,numPantalla);
    this.presionaTecla(tres,numPantalla);
    this.presionaTecla(cuatro,numPantalla);
    this.presionaTecla(cinco,numPantalla);
    this.presionaTecla(seis,numPantalla);
    this.presionaTecla(siete,numPantalla);
    this.presionaTecla(ocho,numPantalla);
    this.presionaTecla(nueve,numPantalla);
  },
  presionaTecla:function (tecla,numPantalla){
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
          Calculadora.teclaPrevia='';
          Calculadora.operacion='';
          Calculadora.teclaPrevia='';
          break;
        case 'sign':
          if (numeroEnPantalla!='0'){
            numPantalla.innerHTML=parseFloat(numeroEnPantalla)*-1;
          }
          Calculadora.teclaPrevia='';
          break;
        case 'raiz':
          //El botón de raiz cuadrada no hace nada
          Calculadora.teclaPrevia='';
          break;
        case 'dividido':
          Calculadora.guardaValoresDeOperacion(numPantalla,teclaPresionada);
          Calculadora.teclaPrevia='';
          break;
        case 'por':
          Calculadora.guardaValoresDeOperacion(numPantalla,teclaPresionada);
          Calculadora.teclaPrevia='';
          break;
        case 'menos':
          Calculadora.guardaValoresDeOperacion(numPantalla,teclaPresionada);
          Calculadora.teclaPrevia='';
          break;
        case 'mas':
          Calculadora.guardaValoresDeOperacion(numPantalla,teclaPresionada);
          Calculadora.teclaPrevia='';
          break;
        case 'igual':
          Calculadora.CalculaResultadoDeLaOperacion(numPantalla);
          Calculadora.teclaPrevia=teclaPresionada;
          break;
        case 'punto':
          Calculadora.AgregarPuntoAlNumeroEnPantalla(numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '0':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '1':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '2':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '3':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '4':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '5':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '6':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '7':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '8':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
          break;
        case '9':
          Calculadora.muestraNumeroEnPantalla(teclaPresionada,numPantalla);
          Calculadora.teclaPrevia='';
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
  guardaValoresDeOperacion:function(numPantalla,teclaPresionada){
    Calculadora.numAnterior=numPantalla.innerHTML;
    Calculadora.operacion=teclaPresionada;
    numPantalla.innerHTML='';
  },
  AgregarPuntoAlNumeroEnPantalla:function(numPantalla){
    //El numero no tiene punto y es menor a 8 dígitos
    if ((numPantalla.innerHTML.indexOf('.')<0) && (numPantalla.innerHTML!='')
         && (numPantalla.innerHTML.length<8)){
      numPantalla.innerHTML+='.';
    }
  },
  CalculaResultadoDeLaOperacion:function(numPantalla){
    if (numPantalla.innerHTML!='0'){
      var numAntesDelResultado=numPantalla.innerHTML;
      var numOperacionFinal;

      numOperacionFinal=this.devuelveResultadoDeOperacion(numPantalla);
      numPantalla.innerHTML=numOperacionFinal;

      //Para que se guarde el ultimo numero y poder hacer operaciones consecutivas
      if (numAntesDelResultado!='' && Calculadora.teclaPrevia==''){
        Calculadora.numAnterior=numAntesDelResultado;
      }
    }
  },
  devuelveResultadoDeOperacion:function(numPantalla){
    var numOper,resultado;
    switch(Calculadora.operacion){
      case 'dividido':
        if (Calculadora.operacion!='' && Calculadora.numAnterior!=''){
          if (numPantalla.innerHTML!=''){
            numOper=parseFloat(Calculadora.numAnterior)/parseFloat(numPantalla.innerHTML);
            console.log(numOper);
            resultado=this.validaNumeroAOchoDigitos(numOper);
          }
          else{
            resultado=Calculadora.numAnterior;
          }
          return resultado;
        }
        break;
      case 'por':
        if (Calculadora.operacion!='' && Calculadora.numAnterior!=''){
          if (numPantalla.innerHTML!=''){
            numOper=parseFloat(Calculadora.numAnterior)*parseFloat(numPantalla.innerHTML);
            resultado=this.validaNumeroAOchoDigitos(numOper);
          }
          else{
            resultado=Calculadora.numAnterior='';;
          }
          return resultado;
        }
        break;
      case 'menos':
        if (Calculadora.operacion!='' && Calculadora.numAnterior!=''){
          if (numPantalla.innerHTML!=''){
            numOper=parseFloat(Calculadora.numAnterior)-parseFloat(numPantalla.innerHTML);
            resultado=this.validaNumeroAOchoDigitos(numOper);
          }
          else{
            resultado=Calculadora.numAnterior;
          }
          return resultado;
        }
        break;
      case 'mas':
      if (Calculadora.operacion!='' && Calculadora.numAnterior!=''){
          if (numPantalla.innerHTML!=''){
            numOper=parseFloat(Calculadora.numAnterior)+parseFloat(numPantalla.innerHTML);
            resultado=this.validaNumeroAOchoDigitos(numOper);
          }
          else{
            resultado=Calculadora.numAnterior;
          }
          return resultado;
        }
        break;
      default:
        break;
    }
  },
  validaNumeroAOchoDigitos:function(numOper){
    var numCadena=numOper.toString();
    if (numCadena.length>=8){
      // Se corta la cadena y se deja en 8 dígitos
      numCadena=numCadena.substring(0,8);
    }
    return numCadena;
  }
}

Calculadora.iniciar();
