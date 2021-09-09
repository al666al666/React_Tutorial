import axios from 'axios';
import React ,{useState,useEffect} from 'react';

export default function Render() {
    const [resourceType, setresourceType] = useState('posts')
    const [newList, setNewList] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res=>{
            setNewList(res.data)
        })
        .catch(err=>{
            console.log(err) 
        })
    },[resourceType])
    return (
       <>
       <button onClick ={()=>setresourceType('users')}>Users</button>
       <button onClick ={()=>setresourceType('comments')}>Comments</button>
       <button onClick ={()=>setresourceType('posts')}>Posts</button>

       <ul className="data-list" >
           {newList.map(ele=>{
               return <li key={ele.id}>{ele.name || ele.title}</li>
           })}
       </ul>
       </>
    )
}