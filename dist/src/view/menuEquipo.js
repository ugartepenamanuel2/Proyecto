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
exports.menu2 = void 0;
const entradaTeclado_1 = require("../view/entradaTeclado");
const menu2 = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log('1.- Listar Jugadores Disponibles');
    console.log('2.- Buscar mi Jugador');
    console.log('3.- Ver mis Jugadores');
    console.log('4.- Generar Jugadores');
    console.log('5.- Fichar Jugador');
    console.log('6.- Vender Jugador');
    console.log('7.- Borrar lista de jugadores disponibles');
    console.log('0.- Salir');
    n = parseInt(yield (0, entradaTeclado_1.leerTeclado)('opción: '));
    return n;
});
exports.menu2 = menu2;
