function establecerDireccion(keyCode) {
    if (keyCode == 65 || keyCode == 37) {
        if (direccionViborita() !== "derecha")
            return "izquierda";
    } else if (keyCode == 68 || keyCode == 39) {
        if (direccionViborita() !== "izquierda")
            return "derecha";
    } else if (keyCode == 40 || keyCode == 83) {
        if (direccionViborita() !== "arriba")
            return "abajo";
    } else if (keyCode == 87 || keyCode == 38) {
        if (direccionViborita() !== "abajo")
            return "arriba";
    }
    return direccionViborita();
}

function viboritaPuedeComerManzana() {
    if (posicionEnXDeLaViborita() === posicionEnXDeLaManzana() && posicionEnYDeLaViborita() === posicionEnYDeLaManzana()) {
        return true;
    } else {
        return false;
    }
}

function aumentarPuntaje() {
    if (viboritaPuedeComerManzana()) {
        puntaje++;
        if (puntaje % 2 === 0) {
            nivel++;
            fps += 2;
        }
    }
}

function perdio(viborita) {
    if (seEnredo(viborita) || posicionEnXDeLaViborita() >= anchoDeLaVentana() || posicionEnYDeLaViborita() >= altoDeLaVentana() || posicionEnXDeLaViborita()==0 || posicionEnYDeLaViborita()==0) {
        return true;
    } else {
        return false;
    }
}