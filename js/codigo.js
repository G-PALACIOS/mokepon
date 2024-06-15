function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
          resultado = "Piedra 🪨"
    } else if(jugada == 2) {
         resultado = "Papel 🧻"
    } else if(jugada == 3) {
        resultado = "tijera ✂️"
    } else {
         resultado = "MORISTE"
        }
        return resultado
}

// 1 es piedra, 2 es papel 3 es tijera
let jugador = 0
let pc = 0 
let triunfo = 0
let perdidas = 0


    while (triunfo < 3 && perdidas < 3) { 
        pc = aleatorio (1,3)
        jugador = prompt("Elige: 1 para 🪨, 2 para 🧻, 3 para ✂️")

        //alert("Elegiste " + jugador)

        alert("pc elige: " + eleccion(pc))
        alert("tu elegies: " + eleccion(jugador))

        //combate
        if(pc == jugador) {
            alert("EMPATE")
        } else if(jugador == 1 && pc == 3) {
            alert("GANASTE")
            triunfo = triunfo + 1
        } else if(jugador == 2 && pc == 1) {
            alert("GANASTE")
            triunfo = triunfo + 1
        } else if(jugador == 3 && pc == 2) {
            alert("GANASTE")
            triunfo = triunfo + 1
         } else {
            alert("PERDISTE")
            perdidas = perdidas + 1
         }  
    }
    function seleciionar
alert("GANASTE " + triunfo + " veces. PERDISTE " + perdidas + " veces")