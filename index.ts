import { db } from './src/database/database'
import { Equipo } from './src/clases/equipo'
import { iEquipo } from './src/schemas/equipos'
import { Jugador, Portero, Reserva } from './src/clases/jugador'
import { leerTeclado } from './src/view/entradaTeclado'
import { menuPral } from './src/view/menuPral'
import { Equipos } from './src/schemas/equipos'
import { menu2 } from './src/view/menuEquipo'
import { iJugador, iPortero, iReserva, JugadoresDB } from './src/schemas/jugadores'



let equipo: Array<Equipo> = new Array<Equipo>();
equipo[0] = new Equipo(1, 500, "Athletic Club", new Date("1898-03-16"), 5, []);
equipo[1] = new Equipo(2, 2500, "Atletico de Madrid", new Date("1903-03-01"), 20, []);
equipo[2] = new Equipo(3, 1000, "Cadiz CF", new Date("1910-10-26"), 0, []);
equipo[3] = new Equipo(4, 42423, "FC Barcelona", new Date("1899-04-06"), 45, []);
equipo[4] = new Equipo(5, 200, "Real Betis Balompie", new Date("1907-04-07"), 3, []);
equipo[5] = new Equipo(6, 150, "Real Sociedad", new Date("1909-02-16"), 4, []);
equipo[6] = new Equipo(7, 100, "Granada CF", new Date("1931-08-12"), 0, []);
equipo[7] = new Equipo(8, 50, "Osasuna", new Date("1920-05-12"), 2, []);
equipo[8] = new Equipo(9, 70, "Levante", new Date("1909-12-13"), 1, []);
equipo[9] = new Equipo(10, 90, "RC Celta", new Date("1923-08-16"), 1, []);
equipo[10] = new Equipo(11, 110, "Elche", new Date("1923-11-16"), 0, []);
equipo[11] = new Equipo(12, 180, "Sevilla FC", new Date("1923-12-16"), 0, []);
equipo[12] = new Equipo(13, 150, "Valencia FC", new Date("1919-09-16"), 7, []);
equipo[13] = new Equipo(14, 65, "Getafe CF", new Date("1983-06-16"), 1, []);
equipo[14] = new Equipo(15, 76, "RCD Mallorca", new Date("1916-08-15"), 6, []);
equipo[15] = new Equipo(16, 40, "Rayo Vallecano", new Date("1924-06-16"), 0, []);
equipo[16] = new Equipo(17, 89, "RCD Espanyol", new Date("1900-10-26"), 2, []);
equipo[17] = new Equipo(18, 65, "Alavés", new Date("1921-06-10"), 2, []);
equipo[18] = new Equipo(19, 65, "Villareal CF", new Date("1923-09-11"), 1, []);
equipo[19] = new Equipo(20, 3500, "Real Madrid", new Date("1902-05-09"), 25, []);
let dSchemaEquipo: iEquipo = {
    _id: null,
    _liquidez: null,
    _nombre: null,
    _fundacion: null,
    _copasGanadas: null,
    _jugadoresEquipos: []
}

let dSchemaJugador: iJugador = {
    _id: null,
    Nombre: null,
    Apellido: null,
    Posicion: null,
    Nacimiento: null,
    Goles: null,
    Lesionado: null,
}

let dSchemaPortero: iPortero = {
    _id: null,
    Nombre: null,
    Apellido: null,
    Posicion: null,
    Nacimiento: null,
    Goles: null,
    Lesionado: null,
    numParadas: null,
    numSaques: null,
}

let dSchemaReserva: iReserva = {
    _id: null,
    Nombre: null,
    Apellido: null,
    Posicion: null,
    Nacimiento: null,
    Goles: null,
    Lesionado: null,
    PosicionLista: null
}

export const salvar = async () => {
    let oSchema: any
    for (let a of equipo) {
        dSchemaEquipo._id = a.getId
        dSchemaEquipo._liquidez = a.getLiquidez
        dSchemaEquipo._nombre = a.getNombreEquipo
        dSchemaEquipo._fundacion = a.getFundacion
        dSchemaEquipo._copasGanadas = a.getCopasGanadas
        dSchemaEquipo._jugadoresEquipos = a.getJugadoresEquipo
        oSchema = new Equipos(dSchemaEquipo)
        await oSchema.save()
    }
}

let main = async () => {
    await db.conectarBD()
    await Equipos.remove({})
    await salvar()
    let x;
    do {
        x = await menuPral()
        switch (x) {
            case 1:
                await listarEquipos()
                break

            case 2:
                let opt = await leerTeclado('Como quiere buscar:\n1) Id\n2) Nombre\n')
                if (opt == "1") {
                    await buscarEquiposId("")
                } else {
                    await buscarEquiposName("")
                }
                break

            case 3:
                await crearEquipo()
                break

            case 4:
                // Gestionar equipo 
                await ConfiguracionEquipo("")
                break
            case 0:
                
                console.log('\nQue tengas un buen día')
                break
        }
        await leerTeclado(' ')
    }while (x != 0)
}


export const listarEquipos = async () => {
    let query: Array<any> = await Equipos.find({})
    for (let a of query) {
        let miEquipo = new Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._jugadoresEquipo)
        miEquipo.todo()
    }
}

export const buscarEquiposId = async (Parametro: String) => {
    Parametro = await leerTeclado('Inserte Id de equipo')
    let query: Array<any> = await Equipos.find({ _id: Parametro })
    for (let a of query) {
        let miEquipo = new Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._jugadoresEquipo)
        miEquipo.todo()
    }
}

export const buscarEquiposName = async (Parametro: String) => {
    Parametro = await leerTeclado('Inserte nombre de equipo')
    let query: Array<any> = await Equipos.find({ _nombre: Parametro })
    for (let a of query) {
        let miEquipo = new Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._jugadoresEquipo)
        miEquipo.todo()
    }
}

export const crearEquipo = async () => {
    let oSchema: any
    let valueName = await leerTeclado('Inserte nombre de equipo')
    let valueFecha = new Date()
    let valueCopas = parseInt(await leerTeclado('Inserte copas'))
    dSchemaEquipo._id = Math.trunc(Math.random() * 10000)
    dSchemaEquipo._nombre = valueName
    dSchemaEquipo._fundacion = valueFecha
    dSchemaEquipo._copasGanadas = valueCopas
    dSchemaEquipo._jugadoresEquipos = []
    oSchema = new Equipos(dSchemaEquipo)
    oSchema.save()
}

export const ConfiguracionEquipo = async (Parametro: String) => {
    Parametro = await leerTeclado("Inserte la Id del equipo a administrar")
    let query: Array<any> = await Equipos.find({ _id: Parametro })
    for (let a of query) {
        let miEquipo = new Equipo(a._id, a._liquidez, a._nombre, a._fundacion, a._copasGanadas, a._ugadoresEquipo)
        miEquipo.todo()
        await menuEquipos(miEquipo)
    }
}

export const menuEquipos = async (miEquipo: Equipo) => {
    let x;
    do {
        console.clear()
        console.log(`Menu del equipo: ${miEquipo.getNombreEquipo}, Presupuesto: ${miEquipo.getLiquidez}`)
        x = await menu2()
        switch (x) {
            case 1: // Works
                // Listar Jugadores (todos)
                await listarJugadores()
                break

            case 2:
                // Buscar un jugador (mio)
                await buscarJugador(miEquipo)
                break

            case 3:
                // Ver Listar jugadores (mios)
                await listarJugador(miEquipo)
                break

            case 4: // Works
                // Generar Jugadores (todos)
                await generarJugadores()
                break

            case 5:
                // Fichar jugador
                await agregarJugador(miEquipo, 0)
                break

            case 6:
                // Vender jugador
                await venderJugador(miEquipo)
                break

            case 7:
                // Borrar coleccion
                await JugadoresDB.remove({})
                break
        }
        await leerTeclado(' ')
    } while (x < 10);
}

export const venderJugador = async (myTeam: Equipo) => {
    let idJugador = parseInt(await leerTeclado('Inserte id de jugador a vender'))
    let myJugador = await myTeam.buscarJugadorId(idJugador)
    console.log(myJugador?.toString())
    let opt = await leerTeclado('Esta seguro de querer eliminarlo? Y/N')
    if (opt == "Y") {
        myTeam.borrarJugadorId(idJugador)
        myTeam.agregarLiquidez(myJugador?.calculoValue())
        await Equipos.updateOne({ _id: myTeam.getId }, { _jugadoresEquipo: myTeam.getJugadoresEquipo, _liquidez: myTeam.getLiquidez })
    } else {
        return
    }

    
}

export const agregarJugador = async (myTeam: Equipo, idJugador: number) => {
    idJugador = parseInt(await leerTeclado('Inserta el id del jugador'))
    let query = await JugadoresDB.find({ _id: idJugador })
    let miJugador: any
    if (query.length != 0) {
        for (let a of query) {
            if (myTeam.ContarJugadores() > 11) {
                miJugador = new Reserva(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado, myTeam.ContarJugadores())
            } else {
                miJugador = new Jugador(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado)
            }
        }
        if (miJugador.calculoValue() < myTeam.getLiquidez) {
            myTeam.AgregarJugador(miJugador)
            myTeam.agregarLiquidez(-miJugador?.calculoValue())
            await Equipos.updateOne({ _id: myTeam.getId }, { _jugadoresEquipo: myTeam.getJugadoresEquipo, _liquidez: myTeam.getLiquidez })
        } else {
            console.log("No tiene presupuesto suficiente")
            return
        }
    } else {
        console.log("No existe Id")
    }
}

export const listarJugadores = async () => {
    let query = await JugadoresDB.find({})
    let miJugador: any
    for (let a of query) {
        if (a.Posicion != "Portero") {
            miJugador = new Jugador(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado)
        } else {
            miJugador = new Portero(a._id, a.Nombre, a.Apellido, a.Posicion, a.Nacimiento, a.Goles, a.Lesionado, a.numParadas, a.numSaques)
        }
        console.log(`${query.indexOf(a)} - ${miJugador.todo()}`)
    }
}

export const estadisticaEquipo = async (myTeam: Equipo) => {
    console.log(`Liquidez del equipo: ${myTeam.getLiquidez}`)
}

export const listarJugador = async (myTeam: Equipo) => {
    await myTeam.listarJugadores()
}

export const buscarJugador = async (myTeam: Equipo) => {
    let opt = await leerTeclado('Como quiere buscar al jugador?\n1) DNI\n2) Nombre\n')
    let myPlayer: any
    console.clear()
    let busqueda: any
    switch (opt) {
        case "1":
            busqueda = parseInt(await leerTeclado('Inserte DNI de Jugador'))
            let myJugador = await myTeam.buscarJugadorId(busqueda)
            if (myJugador !== undefined) {
                myJugador.toString()
            }
            break

        case "2":
            busqueda = await leerTeclado('Inserte nombre de Jugador')
            await myTeam.buscarJugadorNombre(busqueda)
            break
    }
}

export const generarJugadores = async () => {
    let numero = parseInt(await leerTeclado('Inserte numero de jugadores a crear'))
    let ListaNombres = ["Pedro", "Jorge", "Juan", "Miguel", "Antonio", "Josemiguel", "Francisco"]
    let ListaApellidos = ["Garcia", "Alvarez", "Ugarte", "Peña", "Holgado"]
    let ListaPosiciones = ["MedioCentro", "Defensa", "Delantero"]
    let oSchema: any

    for (let i = 0; i < numero; i++) {
        dSchemaPortero._id = dSchemaJugador._id = Math.trunc(Math.random() * 9999999999)
        dSchemaPortero.Nombre = dSchemaJugador.Nombre = ListaNombres[Math.trunc(Math.random() * ListaNombres.length)]
        dSchemaPortero.Apellido = dSchemaJugador.Apellido = ListaApellidos[Math.trunc(Math.random() * ListaApellidos.length)]
        dSchemaPortero.Posicion = dSchemaJugador.Posicion = ListaPosiciones[Math.trunc(Math.random() * ListaPosiciones.length)]
        dSchemaPortero.Nacimiento = dSchemaJugador.Nacimiento = new Date()
        dSchemaPortero.Goles = dSchemaJugador.Goles = 0
        dSchemaPortero.Lesionado = dSchemaJugador.Lesionado = Math.random() > 0.5
        if (Math.random() < 0.9) {
            oSchema = new JugadoresDB(dSchemaJugador)
            await oSchema.save()
        } else {
            dSchemaPortero.Posicion = "Portero"
            dSchemaPortero.numParadas = 0
            dSchemaPortero.numSaques = 0
            oSchema = new JugadoresDB(dSchemaPortero)
            await oSchema.save()
        }
    }
}

main()