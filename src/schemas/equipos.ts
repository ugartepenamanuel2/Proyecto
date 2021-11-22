import { Schema, model } from 'mongoose'
import { Jugador } from '../clases/jugador'
// Definimos el Schema
const equipoSchema = new Schema({
    _id: {
        type: Number  //Valores "A, "T"...
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

})


export type iEquipo = {
    _id: number | null,
    _liquidez: number | null,
    _nombre: string | null,
    _fundacion: Date | null,
    _copasGanadas: Number | null,
    _jugadoresEquipos: Array<Jugador> | null,
}

export const Equipos = model('equipos', equipoSchema)