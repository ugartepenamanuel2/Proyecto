import { Schema, model } from 'mongoose'
import { Jugador } from '../clases/jugador'
// Definimos el Schema
const jugadorSchema = new Schema({
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


})


export type iJugador = {
    _id: Number | null,
    Nombre: String | null,
    Apellido: String | null,
    Posicion: String | null,
    Nacimiento: Date | null,
    Goles: Number | null,
    Lesionado: Boolean | null,
}

export type iPortero = {
    _id: Number | null,
    Nombre: String | null,
    Apellido: String | null,
    Posicion: String | null,
    Nacimiento: Date | null,
    Goles: Number | null,
    Lesionado: Boolean | null,
    numParadas: Number | null,
    numSaques: Number | null,
}

export type iReserva = {
    _id: Number | null,
    Nombre: String | null,
    Apellido: String | null,
    Posicion: String | null,
    Nacimiento: Date | null,
    Goles: Number | null,
    Lesionado: Boolean | null,
    PosicionLista: Number | null
}

// La colección de la BD (Plural siempre)
export const JugadoresDB = model('jugadores', jugadorSchema)