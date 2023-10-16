import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Edit() {
  const {id}=useParams()
  const [data,setData]=useState({id:'',name:'',email:''})
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3030/users/${id}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])

  function handleSubmit(event){
    event.preventDefault()
    axios.put(`http://localhost:3030/users/${id}`,data)
    .then(res=>{
      alert("Data Update Successfully")
      navigate('/')
    })
  }
  return (
    <div className='add-container'>
        <div className='add-box' >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>ID:</label> 
                    <input type='number' disabled name='name' value={data.id} className='form-control'/>-
                </div>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' value={data.name} className='form-control' onChange={e=>setData({...data,name:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' value={data.email} className='form-control' onChange={e=>setData({...data,email:e.target.value})}/>
                    
                </div>
                <br/>
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}
 