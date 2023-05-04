import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { useState } from "react";
import { Caja } from "../Caja";
import "./kanban.scss"




export const Kanban = () => {
  const [data, setData] = useState(mockData);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId != destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);

      {
        /*Almacene en removed lo que se sacó*/
      }

      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban" >
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
                    {section.tasks.map((task,index)=>( 
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
                                    style={{...provided.draggableProps.style,opacity:snapshot.isDragging?"0.5":"1"}}>
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
