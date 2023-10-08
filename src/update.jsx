import axios from "axios";



const Update = ({name,lastname,id,setName,setLastName}) =>{

    const UpdateHandle = ()=>{
        axios.put(`https://652299a1f43b17938414ae5f.mockapi.io/student/${id}`,{
            name:name,
            lastname:lastname
        }).then((res)=>{
            console.log('update')
            window.location.reload()
        })
    }
    return (
        <>
         <div className="update_form"> 
                <p>{id}</p>

               <h1>Update Student</h1>

                <div className="form_div">
                  <input  type="text"  value={name} 
                   onChange={(e)=> setName(e.target.value)}/>
                  <input  type="text"  value={lastname}
                  onChange={(e)=> setLastName(e.target.value)}/>

                  <button onClick={UpdateHandle}>Update</button>
                </div>

          </div>
        </>
    )

}

export default Update;