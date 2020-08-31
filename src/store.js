import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Mariela",
            foto: "https://i.postimg.cc/FHxkXn9D/atleta.png"
        },
        {
            id: 2,
            nombre: "Lucas",
            foto: "https://i.postimg.cc/W1GDGpt9/atleta-1.png"
        },
        {
            id: 3,
            nombre: "Romina",
            foto: "https://i.postimg.cc/dV5hHHmd/instructor.png"
        },
        {
            id: 4,
            nombre: "Carolina",
            foto: "https://i.postimg.cc/s2BgnV2d/deportista.png"
        },
        {
            id: 5,
            nombre: "Luciano",
            foto: "https://i.postimg.cc/Xq1PD0Jm/atleta-2.png"
        },
        {
            id: 6,
            nombre: "Mariana",
            foto: "https://i.postimg.cc/FzzWSnZZ/usuario.png"
        },
        {
            id: 7,
            nombre: "Pablo",
            foto: "https://i.postimg.cc/X7JqZc0Y/deportista-1.png"
        },
        {
            id: 8,
            nombre: "Marianela",
            foto: "https://i.postimg.cc/SNJQQSWX/gimnasio.png"
        },
        {
            id: 9,
            nombre: "Juan Pablo",
            foto: "https://i.postimg.cc/W1GDGpt9/atleta-1.png"
        },
        {
            id: 10,
            nombre: "Melanie",
            foto: "https://i.postimg.cc/nh49tKbV/deportista-2.png"
        },
        {
            id: 11,
            nombre: "Fabian",
            foto: "https://i.postimg.cc/TY8rM3L9/deportista-3.png"
        },
        {
            id: 12,
            nombre: "Valeria",
            foto: "https://i.postimg.cc/Wz0qb0F7/mujer.png"
        },
        {
            id: 13,
            nombre: "Matias",
            foto: "https://i.postimg.cc/j2YC9Cgn/deportista-4.png"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)