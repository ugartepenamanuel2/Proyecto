"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipos = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const equipoSchema = new mongoose_1.Schema({
    _id: {
        type: Number //Valores "A, "T"...
    },
    _liquidez: {
        type: Number
    },
    _nombre: {
        type: String
    },
    _fundacion: {
        type: Date
    },
    _copasGanadas: {
        type: Number
    },
    _jugadoresEquipo: {
        type: Array
    },
});
exports.Equipos = (0, mongoose_1.model)('equipos', equipoSchema);
