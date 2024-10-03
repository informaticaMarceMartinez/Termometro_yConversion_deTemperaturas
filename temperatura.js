function iniciar() {
    document.getElementById("visual").style.opacity = 0;
    document.getElementById("tempC").innerHTML = 0; 
    document.getElementById("tempF").innerHTML = 0;
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("valorTemp").value = "";
  //  document.getElementById("termometro0").style.transitionProperty = "opacity";
  //  document.getElementById("termometro0").style.transitionDuration = "2s";
    document.getElementById("termometro0").style.visibility = "visible";
    document.getElementById("termometro0").style.opacity = 1;
    document.getElementById("termometro0").style.zIndex = 120;
   
}

var z = 14;  // Variable para ir sumando posiciones con el valor de xIndex

const tempArray = [
    ['Temperaturas entre -30 y -1 Grados', 'imagenes/00.jpeg', '¡¡Temperatura Muy Baja!!<br> ¿Que Frio he?'],
    ['Temperaturas entre 0 y 12 Grados', 'imagenes/02.jpeg', 'Temperatura Baja, pero:<br>¡ Se lleva bien !'],
    ['Temperaturas entre 13 y 25 Grados', 'imagenes/04.jpeg', 'Temperatura templada, momento de ir al parque!'],
    ['Temperaturas entre 26 y 40 Grados', 'imagenes/10.jpeg', '¡Temperatura Alta! ¿Piensan venir a la playa?'],
    ['Temperaturas entre 41 y 60 Grados', 'imagenes/06.jpeg', 'Temperatura MUY Alta !! Ni loco salgo a la calle'],
    ['Datos con ERROR', 'imagenes/11.jpeg', 'xxxxx'],
]     

function calcular() {

    let c = document.getElementById("valorTemp").value;
    var msg = document.getElementById("mensaje");
    msg.innerHTML ="";

            // Cargo el termometro en CERO grados (Sin Colores) //
    document.getElementById("termometro0").style.transitionProperty = "opacity";
    document.getElementById("termometro0").style.transitionDuration = "2s";
    document.getElementById("termometro0").style.visibility = "visible";
    document.getElementById("termometro0").style.opacity = 1;
    document.getElementById("termometro0").style.zIndex = z + 1;

    try {
        if (c.trim() == "") throw " Debe ingresar un valor para Temperatura";
        if (isNaN(c)) throw " Debe ingresar un valor NUMERICO para Temperatura";

        c = Number(c);
        if (c < -30) throw " Temperatura Muy Baja, Mínimo -30 Grados";
        if (c > 60) throw " Temperatura Muy Alta, Máximo 60 Grados";

        if (c >= -30 && c <= -1) {
            document.getElementById("visual").src = tempArray[0][1];
            msg.innerHTML = tempArray[0][2];
            msg.style.color = "blue";
            document.getElementById("visual").style.opacity = 1;
            document.getElementById("tempC").innerHTML = c; 
                    /* Grados Fahrenheit = (grados centígrados × 9/5) +32. */
            document.getElementById("tempF").innerHTML = (c * 9/5) +32; 

            // Pintar el Termometro
            if (c >= -30 && c <= -20) {
              //  document.getElementById("termometro0").style.zIndex="-10";
                //document.getElementById("termometro1").style.zIndex = z + 1;

                zI(1);

                document.getElementById("termometro1").style.transitionProperty = "opacity";
                document.getElementById("termometro1").style.transitionDuration = "2s";
                document.getElementById("termometro1").style.visibility = "visible";
                document.getElementById("termometro1").style.opacity = 1;
              //  document.getElementById("termometro1").style.zIndex = z + 1;

            }
            if (c >= -19 && c <= -10) {
             //   document.getElementById("termometro0").style.zIndex="-10";
               // document.getElementById("termometro2").style.zIndex = z + 1;

               zI(2);

                document.getElementById("termometro2").style.transitionProperty = "opacity";
                document.getElementById("termometro2").style.transitionDuration = "2s";
                document.getElementById("termometro2").style.visibility = "visible";
                document.getElementById("termometro2").style.opacity = 1;
            }
            if (c >= -11 && c <= -1) {
            //    document.getElementById("termometro0").style.zIndex="-10";
              //  document.getElementById("termometro3").style.zIndex = z + 1;

              zI(3);

                document.getElementById("termometro3").style.transitionProperty = "opacity";
                document.getElementById("termometro3").style.transitionDuration = "2s";
                document.getElementById("termometro3").style.visibility = "visible";
                document.getElementById("termometro3").style.opacity = 1;
            }
        }

        if (c >= 0 && c <= 12) {
            document.getElementById("visual").src = tempArray[1][1];
            msg.innerHTML = tempArray[1][2];
            msg.style.color = "blue";
            document.getElementById("visual").style.opacity = 1;
            document.getElementById("tempC").innerHTML = c; 
                     /* Grados Fahrenheit = (grados centígrados × 9/5) +32. */
             document.getElementById("tempF").innerHTML = (c * 9/5) +32; 
             
                         // Pintar el Termometro
            if (c >= 0 && c <= 12) {
            //    document.getElementById("termometro0").style.zIndex="-10";
              //  document.getElementById("termometro4").style.zIndex = z + 1;

              zI(4);

                document.getElementById("termometro4").style.transitionProperty = "opacity";
                document.getElementById("termometro4").style.transitionDuration = "2s";
                document.getElementById("termometro4").style.visibility = "visible";
                document.getElementById("termometro4").style.opacity = 1;
            }
        }
 
        if (c >= 13 && c <= 25) {
            document.getElementById("visual").src = tempArray[2][1];
            msg.innerHTML = tempArray[2][2];
            msg.style.color = "orange";
            document.getElementById("visual").style.opacity = 1;
            document.getElementById("tempC").innerHTML = c; 
                     /* Grados Fahrenheit = (grados centígrados × 9/5) +32. */
             document.getElementById("tempF").innerHTML = (c * 9/5) +32;  

                         // Pintar el Termometro
            if (c >= 13 && c <= 20) {
       //         document.getElementById("termometro0").style.zIndex="-10";
         //       document.getElementById("termometro5").style.zIndex = z + 1;

             zI(5);

                document.getElementById("termometro5").style.transitionProperty = "opacity";
                document.getElementById("termometro5").style.transitionDuration = "2s";
                document.getElementById("termometro5").style.visibility = "visible";
                document.getElementById("termometro5").style.opacity = 1;
            }
            if (c >= 21 && c <= 25) {
             //   document.getElementById("termometro0").style.zIndex="-10";
               // document.getElementById("termometro6").style.zIndex = z + 1;

               zI(6);

                document.getElementById("termometro6").style.transitionProperty = "opacity";
                document.getElementById("termometro6").style.transitionDuration = "2s";
                document.getElementById("termometro6").style.visibility = "visible";
                document.getElementById("termometro6").style.opacity = 1;
            }
        }

        if (c >= 26 && c <= 40) {
            document.getElementById("visual").src = tempArray[3][1];
            msg.innerHTML = tempArray[3][2];
            msg.style.color = "rgb(99, 10, 10)";
            document.getElementById("visual").style.opacity = 1;
            document.getElementById("tempC").innerHTML = c; 
                     /* Grados Fahrenheit = (grados centígrados × 9/5) +32. */
             document.getElementById("tempF").innerHTML = (c * 9/5) +32;
             
                         // Pintar el Termometro
            if (c >= 26 && c <= 30) {
            //    document.getElementById("termometro0").style.zIndex="-10";
              //  document.getElementById("termometro7").style.zIndex = z + 1;

              zI(7);

                document.getElementById("termometro7").style.transitionProperty = "opacity";
                document.getElementById("termometro7").style.transitionDuration = "2s";
                document.getElementById("termometro7").style.visibility = "visible";
                document.getElementById("termometro7").style.opacity = 1;
            }
            if (c >= 31 && c <= 40) {
            //    document.getElementById("termometro0").style.zIndex="-10";
                //document.getElementById("termometro8").style.zIndex = z + 1;
                
                zI(8);

                document.getElementById("termometro8").style.transitionProperty = "opacity";
                document.getElementById("termometro8").style.transitionDuration = "2s";
                document.getElementById("termometro8").style.visibility = "visible";
                document.getElementById("termometro8").style.opacity = 1;
            }
        }

        if (c >= 41 && c <= 60) {
            document.getElementById("visual").src = tempArray[4][1];
            msg.innerHTML = tempArray[4][2];
            msg.style.color = "rgb(51, 11, 11)";

            document.getElementById("visual").style.opacity = 1;
            document.getElementById("tempC").innerHTML = c; 
                     /* Grados Fahrenheit = (grados centígrados × 9/5) +32. */
             document.getElementById("tempF").innerHTML = (c * 9/5) +32;  

                         // Pintar el Termometro
            if (c >= 41 && c <= 50) {
             //   document.getElementById("termometro0").style.zIndex="-10";
               // document.getElementById("termometro9").style.zIndex = z + 1;

               zI(9);

                document.getElementById("termometro9").style.transitionProperty = "opacity";
                document.getElementById("termometro9").style.transitionDuration = "2s";
                document.getElementById("termometro9").style.visibility = "visible";
                document.getElementById("termometro9").style.opacity = 1;
            }
            if (c >= 51 && c <= 60) {
                // document.getElementById("termometro0").style.zIndex="-10";
                // document.getElementById("termometro10").style.zIndex = z + 1;

                zI(10);

                document.getElementById("termometro10").style.transitionProperty = "opacity";
                document.getElementById("termometro10").style.transitionDuration = "2s";
                document.getElementById("termometro10").style.visibility = "visible";
                document.getElementById("termometro10").style.opacity = 1;
            }
        }

    }
    catch(err) {
        msg.style.color = "red";
        msg.innerHTML = "ERROR: " + err;
        document.getElementById("visual").src = tempArray[5][1];
        document.getElementById("visual").style.opacity = 1;
    }
}

function zI(a) {

    for (let i=0; i<=10; i++) {

        var t = "termometro";
        document.getElementById(t + i).style.zIndex = -1;
    }

    document.getElementById("termometro" + a).style.zIndex = 1;
}