import { AddTask } from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
function App() {
  const [buttonToggole, setButtonToggle] = useState(true);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "teask one",
      day: "7 jan 2024",
      reminder: true,
    },
    {
      id: 2,
      text: "teask two",
      day: "9 jan 2024",
      reminder: true,
    },
    {
      id: 3,
      text: "teask three",
      day: "8 jan 2024",
      reminder: false,
    },
  ]);

  const handelAddTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const handelDeleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggoleAddButton = () => {
    setButtonToggle(!buttonToggole);
  };
  return (
    <div className="App">
      <Header title="Task Tacker" toggole={toggoleAddButton} showAdd={buttonToggole} />
      {buttonToggole && <AddTask addTask={handelAddTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handelDeleteTask} /> : "No task set yet"}
    </div>
  );
}

export default App;
