import React, { useState } from 'react'

export default function AddForm() {
    const [showForm, setShowForm] = useState(false)

  return (
    <div>
        
        {showForm && (<div>
                        <label>
                            <span>Title:</span>
                            <input type="text"/>
                        </label> <br/>
                        <label>
                            <span>Start</span>
                            <input type="date"/> 
                        </label><br/>
                        
                        <button onClick={()=>{setShowForm(false)}}>Cancel</button>
                    </div>
                    )}<br/>
        <button onClick={()=>{setShowForm(true)}}>Add Task</button>
        
    </div>
  )
}
