import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    tittle: " 📑 Por hacer",
    tasks: [
      {
        id: uuidv4(),
        tittle: "Estudiar Js",
      },
      {
        id: uuidv4(),
        tittle: "Estudiar React",
      },
      {
        id: uuidv4(),
        tittle: "Estudiar HTML & CSS",
      },
    ],
  },
  {
    id: uuidv4(),
    tittle: " ⏳ En progreso",
    tasks: [
      {
        id: uuidv4(),
        tittle: "Curso Js",
      },
      {
        id: uuidv4(),
        tittle: "Curso React",
      },
      {
        id: uuidv4(),
        tittle: "Curso HTML & CSS",
      },
    ],
  },
  {
    id: uuidv4(),
    tittle: " ✔ Completado",
    tasks: [
      {
        id: uuidv4(),
        tittle: "Curso Js",
      },
      {
        id: uuidv4(),
        tittle: "Curso React",
      },
      {
        id: uuidv4(),
        tittle: "Curso HTML & CSS",
      },
    ],
  },
];

export default mockData;


{/* v4 es un método de la librería uuid que genera un identificador único universal (UUID) aleatorio. Los UUID son identificadores únicos que se utilizan en muchos sistemas para identificar de manera única recursos o entidades. El método v4 genera UUIDs aleatorios basados en el tiempo y la dirección MAC de la máquina (si está disponible) y algunos otros valores aleatorios. La función uuidv4() en el código que mostraste se utiliza para generar una nueva UUID cada vez que se crea una nueva tarea en el tablero kanban.  */}