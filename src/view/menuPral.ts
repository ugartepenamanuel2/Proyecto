import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.clear()
    console.log('1.- Listar equipos')
    console.log('2.- Buscar equipo')
    console.log('3.- Crear equipo')
    console.log('4.- Gestionar equipo')
    //console.log('5.- Crear liga')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}