// Se crea la función principal
var Calculadora=(function(){
  var teclas=document.getElementsByClassName('tecla');
  var teclaSeleccionada;

  return{
    iniciar:function(){
      for(var i=0; i<teclas.length; i++){
        teclas[i].addEventListener('mousedown',function(e){
          e.target.style.transform='scale(0.85,0.85)';
          teclaSeleccionada=e.target.id;
        });
        teclas[i].addEventListener('mouseup',function(e){
          e.target.style.transform='scale(1,1)';
        });
      }
      console.log('tecla: '+teclaSeleccionada);
    }
  }
})();

Calculadora.iniciar();

btn1.addEventListener(mousedown,sumar)
btn1.addEventListener(mousedown,restar)

//Mas o menos como debe quedar la estructura
var calculadora=function Iniciar(){
  btn1=getElementsById('1')
  btn1.addEventListener(mousedown,sumar)
  btn1.addEventListener(mousedown,restar)

  function sumar
  function restar
  function mostrarResultado
}
calculadora.Iniciar()

//ejemplo con getElementById
var calculadora = {
    init: function(){
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")

cero.addEventListener("mousedown", function(){
            cero.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style","transform:scale(1,1)")
        })
        uno.addEventListener("click",function(){
            self.numero("1")
        })
    }
}

//La ultima explicación
Si, pero es que te estas confundiendo con los metodos de las operaciones,
esos los debes hacer para sus respectivos botones, o sea para el boton se
suma es donde debes hacerlo para sumar y así con los demás, en los otros
botones, el de los números solo concentrate que se vean en la pantalla
