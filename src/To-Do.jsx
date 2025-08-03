import React from "react";
import { useState } from "react";


function ToDo() {
    const [tasks, setTasks] = useState(["EAT AT 9", "SLEEP AT 10", "WRITE AN ESSAY"]);
    const [newTask, setNewTask] = useState("");

    function inputHandle(event) {
        setNewTask(event.target.value);
    }

    function AddTask() {
        if (newTask.trim() != "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");

        }


    }

    function DeleteTask(index) {
      const updatedTasks = tasks.filter((element,i) => i !== index);
      setTasks(updatedTasks);
    }
    function MoveUp(index) {
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
       
    }
    function MoveDown(index) {

            if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
        
    }

    return (
        <div className="Main">
        <div className="container">

           <h1>To-Do App</h1> 
            <div className="input-box">
                <input type="text" value={newTask} onChange={inputHandle} placeholder="Add Task Here..." />
                <button className="Add-Btn" type="submit" onClick={AddTask}>Add Task</button>
            </div>
            <ol className="list-container">
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span>
                        <button className="Delete-Btn" onClick={()=>DeleteTask(index)}>🗑️</button>
                        <button className="Up-Btn" onClick={()=>MoveUp(index)}>👆</button>
                        <button className="Down-Btn" onClick={()=>MoveDown(index)}>👇</button>
                    </li>

                )
                }
            </ol>
            </div>
            <h4>by Adharsh Kumar Singh</h4>
        </div>
    )
}

export default ToDo;