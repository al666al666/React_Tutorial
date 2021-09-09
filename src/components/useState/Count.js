import React ,{useState} from 'react'

function Count() {
    const [count, setCount] = useState({count1: 10 , count2 :20})
    return (
        <div>
            <span> Count 1 : {count.count1} </span>
            <span> Count 2 : {count.count2} </span>

            <button onClick ={()=>{setCount({count1:count.count1+1,count2 :count.count2+1})}}>Plus </button>
        </div>
    )
}

export default Count
