import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { useState } from "react";
import { Caja } from "../Caja";
import "./kanban.scss";

export const Kanban = () => {
  const [data, setData] = useState(mockData); {/* Se define un componente Kanban que inicializa su estado con mockData y el hook useState. */}
  const onDragEnd = (result) => {
    if (!result.destination) return;

    {
      /*   función llamada onDragEnd, que se ejecuta cuando se termina de arrastrar un elemento en la interfaz. En esta línea, se verifica si existe una ubicación de destino para el elemento arrastrado, y si no hay ninguna, la función se detiene y no se realiza ninguna acción adicional. Esto es importante porque cuando el usuario suelta el elemento que está arrastrando, puede que no lo haga sobre una ubicación de destino válida en la interfaz, y en ese caso, no se realizará ninguna acción. */
    }

    const { source, destination } = result;
    {
      /*  obtiene la información de la fuente y el destino del elemento que se está arrastrando en la interfaz de usuario.  */
    }

    if (source.droppableId != destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      {
        /*  verifica si el elemento se está moviendo de una lista a otra  y, si es así, encuentra los índices de ambas listas en el arreglo de datos data utilizando la función findIndex() 
        Estos índices se utilizarán posteriormente para actualizar los datos y reflejar el cambio en la interfaz de usuario.  */
      }

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      {
        /* Estas líneas de código asignan a las variables sourceCol y destinationCol los objetos que se encuentran en los índices sourceColIndex y destinationColIndex del array data, respectivamente. En otras palabras, estas variables almacenan los objetos de las columnas de origen y destino del elemento que se está arrastrando. */
      }

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);

      destinationTask.splice(destination.index, 0, removed);

      {
        /* Primero, se crean dos variables nuevas llamadas sourceTask y destinationTask que contienen copias de las matrices de tareas de origen y destino, respectivamente. Esto se hace utilizando la sintaxis de spread ... para crear una copia de los arreglos y evitar mutar los arreglos originales.

Luego, se utiliza el método splice para quitar un elemento de la matriz sourceTask en la posición source.index (la tarea que se está moviendo) y asignarla a una variable llamada removed. El primer argumento de splice es el índice de inicio de la operación de eliminación, y el segundo argumento es el número de elementos que se deben eliminar (en este caso, solo un elemento).

Finalmente, se utiliza el método splice de nuevo para insertar el elemento removed en la matriz destinationTask en la posición destination.index, lo que significa que se está insertando la tarea movida en la nueva ubicación. El primer argumento de splice es el índice de inicio de la operación de inserción, y el segundo argumento es cero, ya que no se está eliminando ningún elemento. */
      }

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
    {
      /* Después de realizar estos cambios en las matrices de tareas de origen y destino, los datos actualizados se vuelven a guardar en la matriz data en las posiciones correspondientes utilizando los índices de columna sourceColIndex y destinationColIndex. Finalmente, se utiliza setData para actualizar el estado de React con los nuevos datos de la matriz data.  */
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="Kanban__section"
                ref={provided.innerRef}
              >
                <div className="kanban__section__title"> {section.tittle} </div>
                <div className="kanban_section_content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Caja>{task.tittle} </Caja>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};


{/*  Este código devuelve una interfaz de usuario para una aplicación Kanban, que permite a los usuarios arrastrar y soltar tareas entre diferentes secciones del Kanban. 

<DragDropContext> es un componente de nivel superior de la biblioteca de arrastrar y soltar de react-beautiful-dnd que envuelve todo el Kanban. Recibe una función onDragEnd como prop, que se llama cuando se completa un arrastre y suelta.  <DragDropContext onDragEnd={onDragEnd}></DragDropContext>

<Droppable> es un componente que define una sección en la que se pueden soltar elementos arrastrados. Cada sección del Kanban se envuelve en un componente <Droppable> y se le asigna un droppableId único para identificarlo. 

Dentro de cada <Droppable>, hay un encabezado que muestra el título de la sección, y una sección de contenido que contiene todas las tareas de esa sección.

Cada tarea se representa como un componente <Draggable>. Cada una tiene su propio draggableId único y un índice que indica su posición en la lista de tareas de la sección. Cada tarea se representa como un elemento <Caja> que contiene el título de la tarea.

Dentro del componente <Draggable>, hay un bloque de código que define cómo se comporta la tarea durante el arrastre. Utiliza la función provided que se pasa como argumento para establecer referencias y props en los elementos JSX necesarios para hacer que la tarea sea arrastrable. También usa el objeto snapshot para cambiar el estilo de la tarea cuando se está arrastrando.

Una estructura básica:

<DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>

           Aquí se pueden incluir los elementos que se quieran hacer draggable 
            Cada elemento draggable debe estar dentro de un componente Draggable 
            
            <Draggable draggableId="draggable-1" index={0}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  Mi elemento draggable
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );


*/ }