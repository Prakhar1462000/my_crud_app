import axios, { Axios} from "axios"

import { useState } from "react"
const Add = ({getData}) =>{

    const [name,setName]=useState('')
    const[lastname,setLastName]=useState('')
    const[alert,setAlert]=useState('');

    const onsubmitHandle = (e)=>{
        e.preventDefault()

        axios.post('https://652299a1f43b17938414ae5f.mockapi.io/student',{
                 name: name,
                 lastname: lastname
            }).then(()=>{
                   setAlert('data Has insert')
                   setName('')
                   setLastName('')
                   getData()

            })


    }


    return(
        <>
            <div className="add_data">
            <h1>Student</h1>
            <span >{alert}</span>
            <div className="form_div">
                <input type="text" value={name} 
                onChange={(e)=>setName(e.target.value)} placeholder="name"/>
                <input type="text" value={lastname} 
                onChange={(e)=>setLastName(e.target.value)}  placeholder="Last name"/>
                <button onClick={onsubmitHandle}> Add Item</button>
            </div>
            </div>
        </>
    )
}
export default Add