"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partidos = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const partidoSchema = new mongoose_1.Schema({
    _id: {
        type: Number //Valores "A, "T"...
    },
    _equipo_local: {
        type: String
    },
    _equipo_visitante: {
        type: String
    },
    _fecha_de_juego: {
        type: Date
    },
    _gol_local: {
        type: Number
    },
    _gol_visitante: {
        type: Number
    }
});
// La colección de la BD (Plural siempre)
exports.Partidos = (0, mongoose_1.model)('partidos', partidoSchema);
