import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);
  console.log("task", task);
  function change(e) {
    setTask(e.target.value);
  }
  function add() {
    setAddTask([...addTask, task]);
  }

  function del(index) {
    const UpdateTask = [...addTask];
    UpdateTask.splice(index, 1);
    setAddTask(UpdateTask);
  }

  const [editTask, setEditTask] = useState(null);

  function add() {
    if (task.trim() !== "") {
      if (editTask != null) {
        const UpdatedTask = [...addTask];
        UpdatedTask[editTask] = task;
        setAddTask(UpdatedTask);
        setEditTask(null);
        setTask(" ");
      } else {
        setAddTask([...addTask, task]);
        setTask(" ");
      }
    }
  }
  function edt(index) {
    setEditTask(index);
    setTask(addTask[index]);
  }
  
  function handleChange(){
       
  }
  return (
    <div className="fr">
      <h1 className="class">TODO LIST</h1>
      <h3 className="all">All Lists</h3>
      <label for="NewTask">Enter a new task: </label>
      <input type="text" class="in" value={task} onChange={change}></input>
      {/* <h4>{addTask}</h4> */}&nbsp;&nbsp;&nbsp;
      <button class="bt" onClick={add}>
        {editTask !== null ? "EDIT TASK" : "ADD TASK"}
      </button>
      &nbsp;
      <div className="task">
        <table width={500}>
          <br />
          <tr>
            <th>Done</th>
            <th>Task</th>
            <th>Due date</th>
            
            <th>Status</th>
          </tr>
          {addTask.map((data, index) => (
            <tr key={index}>
              <td>
                {" "}
                <input type="checkbox"  onChange={handleChange}/>{" "}
              </td>
              <td>{data}</td>
              <td>
                <input type="date" />
              </td>
              
              <td>
              <label for="Status"></label>
              <select name="status" id="">
                <option  >Completed</option>
                <option >In progress</option>
                <option >On hold</option>
                <option >Not started</option>
                <option selected>None</option>
              </select>
              </td>
              <td>
                <button class="bt" onClick={() => edt(index)}>
                  EDIT
                </button>
              </td>
              <td>
                <button class="bt" onClick={() => del(index)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div>
          
          {/* <textarea onChange={handleChange}></textarea> */}
        </div>
      </div>
      
    </div>
  );
}
