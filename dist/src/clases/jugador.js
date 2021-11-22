"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = exports.Portero = exports.Jugador = void 0;
class Jugador {
    constructor(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado) {
        this._id = _id;
        this._nombre = _nombre;
        this._apellido = _apellido;
        this._posicion = _posicion;
        this._nacimiento = _nacimiento;
        this._goles = _goles;
        this._lesionado = _lesionado;
    }
    get getId() {
        return this._id;
    }
    get get_nombre() {
        return this._nombre;
    }
    get get_apellido() {
        return this._apellido;
    }
    get get_posicion() {
        return this._posicion;
    }
    get get_nacimiento() {
        return this._nacimiento;
    }
    get get_lesionado() {
        return this._lesionado;
    }
    get get_goles() {
        return this._goles;
    }
    set set_goles(numero) {
        this._goles = numero;
    }
    set set_id(_id) {
        this._id = _id;
    }
    set set_nombre(_nombre) {
        this._nombre = _nombre;
    }
    set set_apellido(_apellido) {
        this._apellido = _apellido;
    }
    set set_posicion(_posicion) {
        this._posicion = _posicion;
    }
    set set_nacimiento(_nacimiento) {
        this._nacimiento = _nacimiento;
    }
    set set_lesionado(_lesionado) {
        this._lesionado = _lesionado;
    }
    calculoValue() {
        let value = 0;
        switch (this._posicion) {
            case "Defensa":
                value += 10;
                break;
            case "Delantero":
                value += 50;
                break;
            case "Portero":
                value += 70;
                break;
            case "MedioCentro":
                value += 25;
                break;
        }
        value += Math.random() * 100;
        return Math.floor(value);
    }
    todo() {
        return ` DNI: ${this._id}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Posicion: ${this._posicion}, Valor: ${this.calculoValue()}`;
    }
    toString() {
        return ` DNI: ${this._id}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Posicion: ${this._posicion}, Goles: ${this._goles}, Valor: ${this.calculoValue()}`;
    }
}
exports.Jugador = Jugador;
class Portero extends Jugador {
    constructor(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado, N_paradas, N_de_saques) {
        super(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado);
        this.N_de_saques_B = N_de_saques;
        this.N_paradas = N_paradas;
    }
}
exports.Portero = Portero;
class Reserva extends Jugador {
    constructor(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado, _PosicionLista) {
        super(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado);
        this._PosicionLista = _PosicionLista;
    }
}
exports.Reserva = Reserva;
