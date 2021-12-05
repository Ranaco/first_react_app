import Header from "./Components/Header";
import React from "react";
import { useState, useEffect } from "react";
import Button from "./Components/Button";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([
  ]);

  //fetch data from Database;
  useEffect(() =>{
    var getTasks = async () => {
      const fetchDataFromApi = await fetchTasks()
      setTasks(fetchDataFromApi)
    }
    getTasks()
  }, [])

  const fetchTasks =async () =>{
    const res = await fetch("http://localhost:5000/tasks")
    const data = res.json()

    return data
  }


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  return (
    <div className="container">
      <Header />
      {showTask && <AddTask onAdd={addTask} />}
      <Button
        text="Add"
      color= {showTask ? "red": 'steelblue'}
        onAdd={() => setShowTask(!showTask)}
        showAdd={showTask}
      />

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
