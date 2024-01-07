import { useState } from "react";
import { Task } from "./Task";
export const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} key={task.id} onDelete={() => onDelete(task.id)} />
      ))}
    </div>
  );
};
