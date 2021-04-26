//Creo la funcion para tomar los datos del boton al dar click
const teclas = document.getElementById('teclas'),
      pantallas = document.getElementById('pantalla')
 
let operacionEstado = false,
    numero1,
    tipoOperacion,
    puntos


const calculadora = () => {
    if(!teclas) return
    teclas.addEventListener('click', e => {
        const t = e.target,
              d = t.dataset
        //Detecta si pulsamos un numero
        if (d.numero) writeScreen(d.numero)
        //Detecta si pulsamos una operacion matematicas
        if (d.matematica) getOperation(t,d.matematica)
        //Detecta si pulsamos operacion de limpiar o igual
        if (d.operacion) runOperation(d.operacion)
    })
}  

//Esta funcion es para tomar los numeros y concatenarlos
const writeScreen = numero => {
    pantallas.textContent === '0'|| operacionEstado === true
        ? pantallas.textContent = numero
        : pantallas.textContent += numero
    operacionEstado = false    
}

// Esta funcion selecciono la operacion matematica
const getOperation = (elemento, opMatematica) => {
     operacionEstado = true
     numero1 = Number (pantallas.textContent)
     tipoOperacion = opMatematica
     pantallas.textContent = elemento.textContent
     //return {numero1, tipoOperacion}
}

//Esta Funcion es hacer los calculos
const runOperation = operacion => {

    const getresult = (numero1, tipoOperacion) => {
        const numero2 = Number (pantallas.textContent)
        let resultado
        switch (tipoOperacion) {
            case 'suma':
                resultado = numero1  + numero2
                break
            
            case 'multi' :
                resultado = numero1  * numero2
                break
            
            case 'resta' : 
                resultado = numero1 - numero2
                break

             case 'divide' :
                resultado = numero1 / numero2
                break   
            default:
                break;
        }

        resultado === Infinity
         ? pantallas.textContent = 'Error!!!'
         : pantallas.textContent = resultado
    }    

    operacion === 'limpiar'
        ? pantallas.textContent = '0'
        : getresult(numero1, tipoOperacion)
        operacionEstado = true
} 

calculadora()

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  
  var slideIndex = [1,1];
  var slideId = ["mySlides1", "mySlides2"]
  showSlides(1, 0);
  showSlides(1, 1);
  
  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }
  
    

      