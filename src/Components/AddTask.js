import React from "react";
import { useState } from "react";



const AddTask = ({onAdd}) => {

    const [name, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSub = (e) => {
        e.preventDefault()        
        if(!name){
            alert("Please enter the name and then press submit")
            return
    
        }

        onAdd({name, day, reminder})
        setText('')
        setDay('')
        setReminder(false)

    }
        return (
        <form className="add-form" onSubmit={onSub}>
            <div className="form-control ">
                <label>
                    Task
                </label>
                <input type = "text" placeholder="Add Task" value={name}onChange={(e) => setText(e.target.value)}/>
            
            </div>
            <div className="form-control">
                <label>
                Day & time
                </label>
                <input type = "text" placeholder="Add Day & time" value={day} onChange={(e) => setDay(e.target.value)}/>
            
            </div>
            <div className="form-control form-control-check">
                <label>
                    Set Reminder
                </label>
                <input type = "checkbox" value={reminder} checked= {reminder}   onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type= "submit" value={"Save"} className="btn btn-block" ></input>
        </form>
        )
}

export default AddTask
