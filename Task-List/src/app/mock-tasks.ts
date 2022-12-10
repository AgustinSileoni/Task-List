import {Task} from "./Task"

//Array de JSONs que emula una base de datos
export const TASKS:Task[] = [
    {
        id:1,
        text:"Terminar primer modulo de Angular",
        day: 'Agosto 5 a las 12:00',
        reminder: true
    },
    {
        id:2,
        text:"Seguir investigando sobre Bootstrap",
        day: "Agosto 20 a las 08:00",
        reminder: false
    },
    {
        id:3,
        text: "Organizar la semana",
        day: "Domingo 11 de diciembre a las 22:00",
        reminder: true
    },
    {
        id:4,
        text: "Comprar la carne",
        day: "Martes 13 de diciembre a las 10:00",
        reminder: true
    }
]