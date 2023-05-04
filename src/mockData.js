import {v4 as uuidv4} from "uuid"

const mockData=[
    {
id:uuidv4(),
tittle: " 📑 Por hacer",
tasks:[
    {
        id:uuidv4(),
        tittle: "Estudiar Js"
    },
    {
        id:uuidv4(),
        tittle: "Estudiar React"
    },
    {
        id:uuidv4(),
        tittle: "Estudiar HTML & CSS"
    }
]
    },
    {
        id:uuidv4(),
        tittle: " ⏳ En progreso",
        tasks:[
            {
                id:uuidv4(),
                tittle: "Curso Js"
            },
            {
                id:uuidv4(),
                tittle: "Curso React"
            },
            {
                id:uuidv4(),
                tittle: "Curso HTML & CSS"
            }
        ]
            },
            {
                id:uuidv4(),
                tittle: " ✔ Completado",
                tasks:[
                    {
                        id:uuidv4(),
                        tittle: "Curso Js"
                    },
                    {
                        id:uuidv4(),
                        tittle: "Curso React"
                    },
                    {
                        id:uuidv4(),
                        tittle: "Curso HTML & CSS"
                    }
                ]
                    }
]

export default mockData;