import axios from 'axios'
import { useEffect, useState } from "react";
import Add from "./Add";
import Update from './update';
const UserData = () =>{

    const [data,setData]=useState([])
    const [alert,setAlert]=useState('')


    // read students
    function getData()
    {
        axios.get('https://652299a1f43b17938414ae5f.mockapi.io/student').then((res)=>{
            setData(res.data);
        })

    }

    //deleting stiudents

    const deleteHandle = (id)=>{
        axios.delete(`https://652299a1f43b17938414ae5f.mockapi.io/student/${id}`).then(() =>{ // yahan pe jo url dala usme commas check karliya karo error phekta hain
            setAlert('Data delete ho chuka hai')
            getData()
        })
    }

    //update students
    const [myid,SetMyid]=useState('')
    const [u_name,Setu_name] = useState('')
    const [u_lastname,Setu_lastname] = useState('')
    const UpdateForm = (id)=>{

        axios.get(`https://652299a1f43b17938414ae5f.mockapi.io/student/${id}`).then((res)=>{
            console.log(res);

            Setu_name(res.data.name)
            Setu_lastname(res.data.lastname)
            SetMyid(res.data.id);
        })
        document.querySelector('.update_form').classList.add('show')
        document.querySelector('.add_data').classList.add('hide')

    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
        <Add getData={getData}/>
        <Update name={u_name} lastname={u_lastname} id={myid}
            setName={Setu_name} setLastName={Setu_lastname}
        />
        <h1>Table content</h1>
        <span className='d_alert'>{alert} </span>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                data.map((item)=>(
                    <tr>
                <td> {item.name} </td>
                <td> {item.lastname}</td>
                <td><a className="u_btn"
                onClick={()=>UpdateForm(item.id)}>Update</a></td>
                <td><a className="d_btn"
                onClick={()=> deleteHandle(item.id)}>Delete</a></td>
            </tr>

                ))//curly brackets isliye nhi lagaye kyki .map lga rhe hain
            }
        </table>
        </>
    )
}
export default UserData;