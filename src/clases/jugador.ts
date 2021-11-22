import { Number } from "mongoose";

export class Jugador {
    protected _id: number; // para acceder en la subclase
    protected _nombre: string;
    protected _apellido: string;
    protected _posicion: string;
    protected _nacimiento: Date;
    protected _goles: number;
    protected _lesionado: boolean;

    constructor(_id: number, _nombre: string, _apellido: string, _posicion: string, _nacimiento: Date, _goles: number, _lesionado: boolean) {
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
        return this._goles
    }
    set set_goles(numero: number) {
        this._goles = numero
    }
    set set_id(_id: number) {
        this._id = _id
    }
    set set_nombre(_nombre: string) {
        this._nombre = _nombre
    }

    set set_apellido(_apellido: string) {
        this._apellido = _apellido
    }

    set set_posicion(_posicion: string) {
        this._posicion = _posicion
    }
    set set_nacimiento(_nacimiento: Date) {
        this._nacimiento = _nacimiento
    }
    set set_lesionado(_lesionado: boolean) {
        this._lesionado = _lesionado
    }

    calculoValue(): number {
        let value = 0
        switch (this._posicion) {
            case "Defensa":
                value += 10
                break
            case "Delantero":
                value += 50
                break
            case "Portero":
                value += 70
                break
            case "MedioCentro":
                value += 25
                break
        }
        value += Math.random() * 100
        return Math.floor(value)
    }

    todo() {
        return ` DNI: ${this._id}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Posicion: ${this._posicion}, Valor: ${this.calculoValue()}`
    }

    toString() {
        return ` DNI: ${this._id}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Posicion: ${this._posicion}, Goles: ${this._goles}, Valor: ${this.calculoValue()}`
    }
}


export class Portero extends Jugador {

    N_paradas: number
    N_de_saques_B: number

    constructor(_id: number, _nombre: string, _apellido: string, _posicion: string, _nacimiento: Date, _goles: number, _lesionado: boolean, N_paradas: number, N_de_saques: number) {
        super(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado)
        this.N_de_saques_B = N_de_saques
        this.N_paradas = N_paradas
    }
}

export class Reserva extends Jugador {

    _PosicionLista: number

    constructor(_id: number, _nombre: string, _apellido: string, _posicion: string, _nacimiento: Date, _goles: number, _lesionado: boolean, _PosicionLista: number) {
        super(_id, _nombre, _apellido, _posicion, _nacimiento, _goles, _lesionado)
        this._PosicionLista = _PosicionLista
    }
}