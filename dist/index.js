"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJugadores = exports.buscarJugador = exports.listarJugador = exports.estadisticaEquipo = exports.listarJugadores = exports.agregarJugador = exports.venderJugador = exports.menuEquipos = exports.ConfiguracionEquipo = exports.crearEquipo = exports.buscarEquiposName = exports.buscarEquiposId = exports.listarEquipos = exports.salvar = void 0;
const database_1 = require("./src/database/database");
const equipo_1 = require("./src/clases/equipo");
const jugador_1 = require("./src/clases/jugador");
const entradaTeclado_1 = require("./src/view/entradaTeclado");
const menuPral_1 = require("./src/view/menuPral");
const equipos_1 = require("./src/schemas/equipos");
const menuEquipo_1 = require("./src/view/menuEquipo");
const jugadores_1 = require("./src/schemas/jugadores");
let equipo = new Array();
equipo[0] = new equipo_1.Equipo(1, 500, "Athletic Club", new Date("1898-03-16"), 5, []);
equipo[1] = new equipo_1.Equipo(2, 2500, "Atletico de Madrid", new Date("1903-03-01"), 20, []);
equipo[2] = new equipo_1.Equipo(3, 1000, "Cadiz CF", new Date("1910-10-26"), 0, []);
equipo[3] = new equipo_1.Equipo(4, 42423, "FC Barcelona", new Date("1899-04-06"), 45, []);
equipo[4] = new equipo_1.Equipo(5, 200, "Real Betis Balompie", new Date("1907-04-07"), 3, []);
equipo[5] = new equipo_1.Equipo(6, 150, "Real Sociedad", new Date("1909-02-16"), 4, []);
equipo[6] = new equipo_1.Equipo(7, 100, "Granada CF", new Date("1931-08-12"), 0, []);
equipo[7] = new equipo_1.Equipo(8, 50, "Osasuna", new Date("1920-05-12"), 2, []);
equipo[8] = new equipo_1.Equipo(9, 70, "Levante", new Date("1909-12-13"), 1, []);
equipo[9] = new equipo_1.Equipo(10, 90, "RC Celta", new Date("1923-08-16"), 1, []);
equipo[10] = new equipo_1.Equipo(11, 110, "Elche", new Date("1923-11-16"), 0, []);
equipo[11] = new equipo_1.Equipo(12, 180, "Sevilla FC", new Date("1923-12-16"), 0, []);
equipo[12] = new equipo_1.Equipo(13, 150, "Valencia FC", new Date("1919-09-16"), 7, []);
equipo[13] = new equipo_1.Equipo(14, 65, "Getafe CF", new Date("1983-06-16"), 1, []);
equipo[14] = new equipo_1.Equipo(15, 76, "RCD Mallorca", new Date("1916-08-15"), 6, []);
equipo[15] = new equipo_1.Equipo(16, 40, "Rayo Vallecano", new Date("1924-06-16"), 0, []);
equipo[16] = new equipo_1.Equipo(17, 89, "RCD Espanyol", new Date("1900-10-26"), 2, []);
equipo[17] = new equipo_1.Equipo(18, 65, "Alavés", new Date("1921-06-10"), 2, []);
equipo[18] = new equipo_1.Equipo(19, 65, "Villareal CF", new Date("1923-09-11"), 1, []);
equipo[19] = new equipo_1.Equipo(20, 3500, "Real Madrid", new Date("1902-05-09"), 25, []);
let dSchemaEquipo = {
    _id: null,
    _liquidez: null,
    _nombre: null,
    _fundacion: null,
    _copasGanadas: null,
    _jugadoresEquipos: []
};
let dSchemaJugador = {
    _id: null,
    Nombre: null,
    Apellido: null,
    Posicion: null,
    Nacimiento: null,
    Goles: null,
    Lesionado: null,
};
let dSchemaPortero = {
    _id: null,
    Nombre: null,
    Apellido: null,
    Posicion: null,
    Nacimiento: null,
    Goles: null,
    Lesionado: null,
    numParadas: null,
    numSaques: null,
};
let dSchemaReserva = {
    _id: null,
    Nombre: null,
    Apellido: null,
    Posicion: null,
    Nacimiento: null,
    Goles: null,
    Lesionado: null,
    PosicionLista: null
};
const salvar = () => __awaiter(void 0, void 0, void 0, function* () {
    let oSchema;
    for (let a of equipo) {
        dSchemaEquipo._id = a.getId;
        dSchemaEquipo._liquidez = a.getLiquidez;
        dSchemaEquipo._nombre = a.getNombreEquipo;
        dSchemaEquipo._fundacion = a.getFundacion;
        dSchemaEquipo._copasGanadas = a.getCopasGanadas;
        dSchemaEquipo._jugadoresEquipos = a.getJugadoresEquipo;
        oSchema = new equipos_1.Equipos(dSchemaEquipo);
        yield oSchema.save();
    }
});
exports.salvar = salvar;
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    yield equipos_1.Equipos.remove({});
    yield (0, exports.salvar)();
    let x;
    do {
        x = yield (0, menuPral_1.menuPral)();
        switch (x) {
            case 1:
                yield (0, exports.listarEquipos)();
                break;
            case 2:
                let opt = yield (0, entradaTeclado_1.leerTeclado)('Como quiere buscar:\n1) Id\n2) Nombre\n');
                if (opt == "1") {
                    yield (0, exports.buscarEquiposId)("");
                }
                else {
                    yield (0, exports.buscarEquiposName)("");
                }
                break;
            case 3:
                yield (0, exports.crearEquipo)();
                break;
            case 4:
                // Gestionar equipo 
                yield (0, exports.ConfiguracionEquipo)("");
                break;
            case 0:
                console.log('\nQue tengas un buen día');
                break;
        }
        yield (0, entradaTeclado_1.leerTeclado)(' ');
    } while (x != 0);
});
const listarEquipos = () => __awaiter(void 0, void 0, void 0, function* () {
    let query = yield equipos_1.Equipos.find({});
    for (let a of query) {
        let miEquipo = new equipo_1.Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._jugadoresEquipo);
        miEquipo.todo();
    }
});
exports.listarEquipos = listarEquipos;
const buscarEquiposId = (Parametro) => __awaiter(void 0, void 0, void 0, function* () {
    Parametro = yield (0, entradaTeclado_1.leerTeclado)('Inserte Id de equipo');
    let query = yield equipos_1.Equipos.find({ _id: Parametro });
    for (let a of query) {
        let miEquipo = new equipo_1.Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._jugadoresEquipo);
        miEquipo.todo();
    }
});
exports.buscarEquiposId = buscarEquiposId;
const buscarEquiposName = (Parametro) => __awaiter(void 0, void 0, void 0, function* () {
    Parametro = yield (0, entradaTeclado_1.leerTeclado)('Inserte nombre de equipo');
    let query = yield equipos_1.Equipos.find({ _nombre: Parametro });
    for (let a of query) {
        let miEquipo = new equipo_1.Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._jugadoresEquipo);
        miEquipo.todo();
    }
});
exports.buscarEquiposName = buscarEquiposName;
const crearEquipo = () => __awaiter(void 0, void 0, void 0, function* () {
    let oSchema;
    let valueName = yield (0, entradaTeclado_1.leerTeclado)('Inserte nombre de equipo');
    let valueFecha = new Date();
    let valueCopas = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Inserte copas'));
    dSchemaEquipo._id = Math.trunc(Math.random() * 10000);
    dSchemaEquipo._nombre = valueName;
    dSchemaEquipo._fundacion = valueFecha;
    dSchemaEquipo._copasGanadas = valueCopas;
    dSchemaEquipo._jugadoresEquipos = [];
    oSchema = new equipos_1.Equipos(dSchemaEquipo);
    oSchema.save();
});
exports.crearEquipo = crearEquipo;
const ConfiguracionEquipo = (Parametro) => __awaiter(void 0, void 0, void 0, function* () {
    Parametro = yield (0, entradaTeclado_1.leerTeclado)("Inserte la Id del equipo a administrar");
    let query = yield equipos_1.Equipos.find({ _id: Parametro });
    for (let a of query) {
        let miEquipo = new equipo_1.Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._ugadoresEquipo);
        miEquipo.todo();
        yield (0, exports.menuEquipos)(miEquipo);
    }
});
exports.ConfiguracionEquipo = ConfiguracionEquipo;
const menuEquipos = (miEquipo) => __awaiter(void 0, void 0, void 0, function* () {
    let x;
    do {
        console.clear();
        console.log(`Menu del equipo: ${miEquipo.getNombreEquipo}, Presupuesto: ${miEquipo.getLiquidez}`);
        x = yield (0, menuEquipo_1.menu2)();
        switch (x) {
            case 1: // Works
                // Listar Jugadores (todos)
                yield (0, exports.listarJugadores)();
                break;
            case 2:
                // Buscar un jugador (mio)
                yield (0, exports.buscarJugador)(miEquipo);
                break;
            case 3:
                // Ver Listar jugadores (mios)
                yield (0, exports.listarJugador)(miEquipo);
                break;
            case 4: // Works
                // Generar Jugadores (todos)
                yield (0, exports.generarJugadores)();
                break;
            case 5:
                // Fichar jugador
                yield (0, exports.agregarJugador)(miEquipo, 0);
                break;
            case 6:
                // Vender jugador
                yield (0, exports.venderJugador)(miEquipo);
                break;
            case 7:
                // Borrar coleccion
                yield jugadores_1.JugadoresDB.remove({});
                break;
        }
        yield (0, entradaTeclado_1.leerTeclado)(' ');
    } while (x < 10);
});
exports.menuEquipos = menuEquipos;
const venderJugador = (myTeam) => __awaiter(void 0, void 0, void 0, function* () {
    let idJugador = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Inserte id de jugador a vender'));
    let myJugador = yield myTeam.buscarJugadorId(idJugador);
    console.log(myJugador === null || myJugador === void 0 ? void 0 : myJugador.toString());
    let opt = yield (0, entradaTeclado_1.leerTeclado)('Esta seguro de querer eliminarlo? Y/N');
    if (opt == "Y") {
        myTeam.borrarJugadorId(idJugador);
        myTeam.agregarLiquidez(myJugador === null || myJugador === void 0 ? void 0 : myJugador.calculoValue());
        yield equipos_1.Equipos.updateOne({ _id: myTeam.getId }, { _jugadoresEquipo: myTeam.getJugadoresEquipo, _liquidez: myTeam.getLiquidez });
    }
    else {
        return;
    }
});
exports.venderJugador = venderJugador;
const agregarJugador = (myTeam, idJugador) => __awaiter(void 0, void 0, void 0, function* () {
    idJugador = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Inserta el id del jugador'));
    let query = yield jugadores_1.JugadoresDB.find({ _id: idJugador });
    let miJugador;
    if (query.length != 0) {
        for (let a of query) {
            if (myTeam.ContarJugadores() > 11) {
                miJugador = new jugador_1.Reserva(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado, myTeam.ContarJugadores());
            }
            else {
                miJugador = new jugador_1.Jugador(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado);
            }
        }
        if (miJugador.calculoValue() < myTeam.getLiquidez) {
            myTeam.AgregarJugador(miJugador);
            myTeam.agregarLiquidez(-(miJugador === null || miJugador === void 0 ? void 0 : miJugador.calculoValue()));
            yield equipos_1.Equipos.updateOne({ _id: myTeam.getId }, { _jugadoresEquipo: myTeam.getJugadoresEquipo, _liquidez: myTeam.getLiquidez });
        }
        else {
            console.log("No tiene presupuesto suficiente");
            return;
        }
    }
    else {
        console.log("No existe Id");
    }
});
exports.agregarJugador = agregarJugador;
const listarJugadores = () => __awaiter(void 0, void 0, void 0, function* () {
    let query = yield jugadores_1.JugadoresDB.find({});
    let miJugador;
    for (let a of query) {
        if (a.Posicion != "Portero") {
            miJugador = new jugador_1.Jugador(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado);
        }
        else {
            miJugador = new jugador_1.Portero(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado, a.numParadas, a.numSaques);
        }
        console.log(`${query.indexOf(a)} - ${miJugador.todo()}`);
    }
});
exports.listarJugadores = listarJugadores;
const estadisticaEquipo = (myTeam) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Liquidez del equipo: ${myTeam.getLiquidez}`);
});
exports.estadisticaEquipo = estadisticaEquipo;
const listarJugador = (myTeam) => __awaiter(void 0, void 0, void 0, function* () {
    yield myTeam.listarJugadores();
});
exports.listarJugador = listarJugador;
const buscarJugador = (myTeam) => __awaiter(void 0, void 0, void 0, function* () {
    let opt = yield (0, entradaTeclado_1.leerTeclado)('Como quiere buscar al jugador?\n1) DNI\n2) Nombre\n');
    let myPlayer;
    console.clear();
    let busqueda;
    switch (opt) {
        case "1":
            busqueda = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Inserte DNI de Jugador'));
            let myJugador = yield myTeam.buscarJugadorId(busqueda);
            if (myJugador !== undefined) {
                myJugador.toString();
            }
            break;
        case "2":
            busqueda = yield (0, entradaTeclado_1.leerTeclado)('Inserte nombre de Jugador');
            yield myTeam.buscarJugadorNombre(busqueda);
            break;
    }
});
exports.buscarJugador = buscarJugador;
const generarJugadores = () => __awaiter(void 0, void 0, void 0, function* () {
    let numero = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Inserte numero de jugadores a crear'));
    let ListaNombres = ["Pedro", "Jorge", "Juan", "Miguel", "Antonio", "Josemiguel", "Francisco"];
    let ListaApellidos = ["Garcia", "Alvarez", "Ugarte", "Peña", "Holgado"];
    let ListaPosiciones = ["MedioCentro", "Defensa", "Delantero"];
    let oSchema;
    for (let i = 0; i < numero; i++) {
        dSchemaPortero._id = dSchemaJugador._id = Math.trunc(Math.random() * 9999999999);
        dSchemaPortero.Nombre = dSchemaJugador.Nombre = ListaNombres[Math.trunc(Math.random() * ListaNombres.length)];
        dSchemaPortero.Apellido = dSchemaJugador.Apellido = ListaApellidos[Math.trunc(Math.random() * ListaApellidos.length)];
        dSchemaPortero.Posicion = dSchemaJugador.Posicion = ListaPosiciones[Math.trunc(Math.random() * ListaPosiciones.length)];
        dSchemaPortero.Nacimiento = dSchemaJugador.Nacimiento = new Date();
        dSchemaPortero.Goles = dSchemaJugador.Goles = 0;
        dSchemaPortero.Lesionado = dSchemaJugador.Lesionado = Math.random() > 0.5;
        if (Math.random() < 0.9) {
            oSchema = new jugadores_1.JugadoresDB(dSchemaJugador);
            yield oSchema.save();
        }
        else {
            dSchemaPortero.Posicion = "Portero";
            dSchemaPortero.numParadas = 0;
            dSchemaPortero.numSaques = 0;
            oSchema = new jugadores_1.JugadoresDB(dSchemaPortero);
            yield oSchema.save();
        }
    }
});
exports.generarJugadores = generarJugadores;
main();
