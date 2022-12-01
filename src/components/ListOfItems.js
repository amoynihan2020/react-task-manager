import React from "react";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {items} from '../helper.js'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { TextField } from '@mui/material';

const ListOfItems = ({itemsList}) =>{
    const [taskList, setTaskList] = useState(items)
    const [addItem, setAddItem] = useState(false)
    const [newItem, setNewItem] = useState(null)
    useEffect(()=>{
        
    
    },[taskList])

    // generates a new Id, finds the highest id in the list of tasks and add 1 to it to give a new ID
    // probs faulty, but future me problem
    const getNewId = (() => {
        if(taskList){
            const ids = taskList.map(task => {
                return task.id
            })
            return Math.max(...ids) + 1
        }
       
    })
    const addItemToList =(item) =>{
        itemsList.itemsList.push(item)
    }
    const createNewTask = (newText) =>{
        const newTask = {
            id:getNewId(),
            text: newText,
            completed:false
        }
        return newTask
    }
    const addNewItem = () =>{
        if(addItem){
            setAddItem(false)
        } else{
            setAddItem(true)
        }
    }
    const handleChange = ((event) => {
        setNewItem(event.target?.value)
    })
    const handleKeyDown = ((event) => {
        if (event.key === "Enter"){
            console.log(event.target.value)
        }
    })

    const handleButtonClick =((event)=>{
        if(newItem) {
          const newTask = createNewTask(newItem)
          setTaskList([...taskList, newTask])
          
        }
    })

    const deleteTask = (taskToDelete) =>{
        const deleteId = taskToDelete?.id
        const filtered= taskList.filter(task => task.id != taskToDelete.id)
        setTaskList(filtered)
        

    }
    
    return (
    
    <>    
        <Tooltip title="add new task" placement='left'>
            <IconButton  onClick={addNewItem}aria-label ='add-task'>
                <AddIcon/> 
            </IconButton>
        </Tooltip>

        
    
    
        { addItem ? <>
      
            <TextField
                className="input-field"
                label='Add New Task'
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            /> 
            <button onClick={handleButtonClick}>Add Task</button>
     
        </>: ''}
        
        <div className="list-group list-group-flush">
            {taskList.map(item =>(
            <div key={item.id}>
            <input value={item.id} type="checkbox"/>
                <span>{item.text}</span>
    
            <Tooltip title="Delete Task" placement='right'>
                <IconButton  onClick={()=> deleteTask(item)}aria-label ='delete-task'>
                    <DeleteIcon/> 
                </IconButton>
            </Tooltip>

            </div>  
        ))}

        

        
        </div>
    </>
    )

}

export default ListOfItems