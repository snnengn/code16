import React, { useEffect } from 'react'
import { useState } from 'react'
import TaskList from './tasklist'
import { v4 as uuidv4 } from 'uuid'

function Taskform() {
    const emptyForm= {task:"", priority:false, isDone:false}
    const [formData, setFormData]=useState(emptyForm)
    const [tasks, setTasks]=useState([])
    const [taskChangeCount, setTaskChangeCount]=useState(0)

    useEffect(() =>{
        if (taskChangeCount>0)
        {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, [taskChangeCount])

    useEffect(()=>{
        const localStorageTasks=JSON.parse(localStorage.getItem("tasks"))
        setTasks(localStorageTasks ?? [])
    },[])

    function removeTask(uuid){
        setTasks(prev=>prev.filter(item=>item.uuid!==uuid))
        setTaskChangeCount(prev=>prev+1)

    }

    function editTask(uuid){
        const task= tasks.find(item=>item.uuid===uuid)
        setFormData({...task,isEdited:true})
        setTaskChangeCount(prev=>prev+1)
    }

    function doneTask(uuid){
        const taskIndex= tasks.findIndex(item=>item.uuid===uuid)
        const task= tasks[taskIndex]
        task.isDone=!task.isDone
        const newTasks= tasks.slice()
        newTasks[taskIndex]=task
        setTasks(newTasks)
        setTaskChangeCount(prev=>prev+1)
    }

    function handleInputChange(event)
    {
        setFormData(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.type==="checkbox"?
                event.target.checked:event.target.value
            }
        })
    }
    function handleFormSubmit(event){
        event.preventDefault()
        if(formData.isEdited){
            const taskIndex=tasks.findIndex(item=>item.uuid===formData.uuid)
            const newTasks=tasks.slice()
            newTasks[taskIndex]={...formData}
            setTasks(newTasks)
        }
        else if(formData.task.length>3) {
            formData.uuid=uuidv4()
            setTasks(
                prev=>
                [formData, ...prev]
            )

        }
        setTaskChangeCount(prev=>prev+1)
        setFormData(emptyForm)
        event.target.reset()
        console.log(formData)
        
    }
  return (
    <div className='container mt-5'>
        <h2 className='my-4 fw-bold'>Yapılacaklar Listesi</h2>
        <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} doneTask={doneTask}/>
    <form onSubmit={handleFormSubmit}>
  <div className="mb-3 p-4 border rounded bg-light">
    <label htmlFor="inputEmail3" className="col-sm-2 pb-3 lead">Görev Ekle</label>
    <div className="col">
      <input 
      onChange={handleInputChange}
      type="text"
      value={formData.task} 
      className="form-control" 
      id="inputEmail3"
      name='task'/>
        <div className='mt-3'>
           <button type="submit" className="btn btn-primary float-end rounded-circle"><i class="fa-solid fa-plus"></i></button>
      <input className="form-check-input me-2 "
        onChange={handleInputChange} 
        type="checkbox"
        checked={formData.priority} 
        id="priority" 
        name="priority"/>
        <label className="form-check-label" htmlFor="priority">
         Öncelikli <i className="text-warning fa-solid fa-star"></i>
        </label> 
        </div>
        
      
  
    </div>
  </div>
  
</form>
</div>
  )
}

export default Taskform