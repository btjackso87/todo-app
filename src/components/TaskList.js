import React, { useEffect, useState } from 'react'

//styles
import './TaskList.css'
import AddForm from './AddForm'

export default function TaskList() {

  //state /json endpoint route
    const [url, setUrl] = useState('http://localhost:3000/todos')
    const [tasks, setTask]= useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    useEffect(()=>{

      try{
        const fetchData = async(uri) => {
          const res = await fetch(uri)
          //console.log(res)
          const json = await res.json()
          setTask(json)
        }

        fetchData(url)

      } catch(err) {

        setError(err)
        console.log(error)

      }
    }, [])

    console.log(tasks);
  


  return (
    <div>
     <h1 className='title'>To Do List</h1> 
      {tasks && tasks.map((task) =>(

        <div className="list" key={task.id}>
          <h2>{task.id} - <del>{task.title}</del>{task.finished ? (<input type="checkbox" checked></input>) : (<input type="checkbox" ></input>)}</h2>

        </div>

      ))}
      <AddForm />
    </div>
  )
}
