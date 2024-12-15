function crearTablero(filas, columnas) {
    let tablero = "<div class='tablero'>";
    for (let i = 0; i < filas; i++) {
        tablero += "<div class='fila'>";
        for (let j = 0; j < columnas; j++) {
            tablero += "<div class='celda'><button></button></div>";
        }
        tablero += "</div>";
    }
    tablero += "</div>";
    return tablero;
}
