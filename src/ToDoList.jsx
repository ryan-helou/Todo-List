import React, {useState} from 'react'

function TodoList(){
    
    const[tasks,setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    
    function addTask(){

    }
    
    function deleteTask(index){

    }
    
    return (
        <div className = "to-do-list">

            <h1>To Do List!</h1>

            <div>
                <input
                    type = "text"
                    placeholder = "Enter task"
                    value = {newTask}
                    onChange = {handleInputChange}
                >
                </input>
            </div>

        </div>
    )

}
export default TodoList