import { leerTeclado } from '../view/entradaTeclado'

export const menu2 = async () => {
    let n: number
    console.log('1.- Listar Jugadores Disponibles')          
    console.log('2.- Buscar mi Jugador')           
    console.log('3.- Ver mis Jugadores')  
    console.log('4.- Generar Jugadores')
    console.log('5.- Fichar Jugador')
    console.log('6.- Vender Jugador')
    console.log('7.- Borrar lista de jugadores disponibles')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}