function crearTablero() {
    let tablero = "<div class='tablero'>";
    for (let i = 0; i < 8; i++) {
        tablero += "<div class='fila'>";
        for (let j = 0; j < 8; j++) {
            tablero += "<div class='celda'><button></button></div>";
        }
        tablero += "</div>"
    }
    tablero += "</div>"
    return tablero;
}