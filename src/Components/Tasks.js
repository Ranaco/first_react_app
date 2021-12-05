import Task from "./Task";


const Tasks = ({tasks, onDelete, toggleReminder}) => {

   
  return (
    <div>
      <ul>
        {tasks.map((e) => (
          <Task key={e.id} task = {e} onDelete={onDelete} toggleReminder = {toggleReminder}/>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
