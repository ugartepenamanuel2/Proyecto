"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadoresDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const jugadorSchema = new mongoose_1.Schema({
    _id: {
        type: Number
    },
    Nombre: {
        type: String
    },
    Apellido: {
        type: String
    },
    Posicion: {
        type: String
    },
    Nacimiento: {
        type: Date
    },
    Goles: {
        type: Number
    },
    Lesionado: {
        type: Boolean
    },
    numParadas: {
        type: Number
    },
    numSaques: {
        type: Number
    },
    PosicionLista: {
        type: Number
    }
});
// La colección de la BD (Plural siempre)
exports.JugadoresDB = (0, mongoose_1.model)('jugadores', jugadorSchema);
