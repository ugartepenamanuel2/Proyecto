"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
class Equipo {
    constructor(_id, _liquidez, _nom_equipo, _fundacion, _copasGanadas, _JugadoresEquipo) {
        this._id = _id;
        this._liquidez = _liquidez;
        this._nom_equipo = _nom_equipo;
        this._fundacion = _fundacion;
        this._copasGanadas = _copasGanadas;
        this._jugadoresEquipo = [];
    }
    get getId() {
        return this._id;
    }
    /*
        AgregarJugador()
            "inserte nombre jugador"
            find() --> Existe/No
        
    */
    listarJugadores() {
        for (let a of this._jugadoresEquipo) {
            console.log(`${a.toString()}`);
        }
    }
    AgregarJugador(Jugador) {
        this._jugadoresEquipo.push(Jugador);
    }
    buscarJugadorNombre(Nombre) {
        for (let a of this._jugadoresEquipo) {
            if (a.get_nombre == Nombre) {
                console.log(`${a.toString()}`);
            }
        }
    }
    buscarJugadorId(DNI) {
        for (let a of this._jugadoresEquipo) {
            if (a.getId == DNI) {
                return a;
            }
        }
    }
    agregarLiquidez(cantidad) {
        if (cantidad !== undefined) {
            this._liquidez += cantidad;
        }
    }
    borrarJugadorId(DNI) {
        for (let a of this._jugadoresEquipo) {
            if (a.getId == DNI) {
                this._jugadoresEquipo.splice(this._jugadoresEquipo.indexOf(a), 1);
            }
        }
    }
    existArray() {
        if (this._jugadoresEquipo = []) {
            return false;
        }
        else {
            return true;
        }
    }
    ContarJugadores() {
        return this._jugadoresEquipo.length;
    }
    get getNombreEquipo() {
        return `${this._nom_equipo}`;
    }
    get getFundacion() {
        return this._fundacion;
    }
    get getCopasGanadas() {
        return this._copasGanadas;
    }
    get getJugadoresEquipo() {
        return this._jugadoresEquipo;
    }
    get getLiquidez() {
        return this._liquidez;
    }
    set setLiquidez(_Liquidez) {
        this._liquidez = _Liquidez;
    }
    set setId(_id) {
        this._id = _id;
    }
    set setNomEquipo(_nom_equipo) {
        this._nom_equipo = _nom_equipo;
    }
    set setFundacion(_fundacion) {
        this._fundacion = _fundacion;
    }
    set setCopasGanadas(_valor) {
        this._copasGanadas = _valor;
    }
    set setJugadoresEquipos(_valor) {
        this._copasGanadas = _valor;
    }
    todo() {
        console.log(`Id equipo: ${this._id}, nombre: ${this._nom_equipo}, Copas: ${this._copasGanadas}`);
    }
}
exports.Equipo = Equipo;
