import { Jugador } from "../clases/jugador"

export class Equipo {
    protected _id: number; // para acceder en la subclase
    protected _liquidez: number;
    protected _nom_equipo: string;
    protected _fundacion: Date;
    protected _copasGanadas: Number;
    protected _jugadoresEquipo: Array<Jugador>

    constructor(_id: number, _liquidez: number, _nom_equipo: string, _fundacion: Date, _copasGanadas: number, _JugadoresEquipo: Array<Jugador>) {
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
            console.log(`${a.toString()}`)
        }
    }

    AgregarJugador(Jugador: Jugador) {
        this._jugadoresEquipo.push(Jugador)
    }


    buscarJugadorNombre(Nombre: String) {
        for (let a of this._jugadoresEquipo) {
            if (a.get_nombre == Nombre) {
                console.log(`${a.toString()}`)
            }
        }
    }

    buscarJugadorId(DNI: Number) {
        for (let a of this._jugadoresEquipo) {
            if (a.getId == DNI) {
                return a
            }
        }
    }

    agregarLiquidez(cantidad: number | undefined) {
        if (cantidad !== undefined) {
            this._liquidez += cantidad
        }
    }

    borrarJugadorId(DNI: Number | undefined) {
        for(let a of this._jugadoresEquipo) {
            if(a.getId == DNI) {
                this._jugadoresEquipo.splice(this._jugadoresEquipo.indexOf(a),1)
            }
        }
    }

    existArray() {
        if (this._jugadoresEquipo = []) {
            return false
        } else {
            return true
        }
    }

    ContarJugadores() {
        return this._jugadoresEquipo.length
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
        return this._jugadoresEquipo
    }

    get getLiquidez() {
        return this._liquidez
    }

    set setLiquidez(_Liquidez: number) {
        this._liquidez = _Liquidez
    }

    set setId(_id: number) {
        this._id = _id
    }

    set setNomEquipo(_nom_equipo: string) {
        this._nom_equipo = _nom_equipo
    }

    set setFundacion(_fundacion: Date) {
        this._fundacion = _fundacion
    }

    set setCopasGanadas(_valor: number) {
        this._copasGanadas = _valor
    }

    set setJugadoresEquipos(_valor: number) {
        this._copasGanadas = _valor
    }


    todo() {
        console.log(`Id equipo: ${this._id}, nombre: ${this._nom_equipo}, Copas: ${this._copasGanadas}`)
    }
}
