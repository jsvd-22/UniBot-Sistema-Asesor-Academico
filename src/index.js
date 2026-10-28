"use strict";

const fs = require("fs");

const contenido = fs.readFileSync(
    "data/estudiantes.csv",
    "utf8"
);

const lineas = contenido.trim().split("\n");

const estudiantes = [];

for (let i = 1; i < lineas.length; i++) {
    const datos = lineas[i].split(",");

    estudiantes.push({
        codigo: datos[0].trim(),
        nombre: datos[1].trim(),
        carrera: datos[2].trim()
    });
}

console.log(estudiantes);