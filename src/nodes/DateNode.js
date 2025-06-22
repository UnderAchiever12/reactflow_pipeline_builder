import React, {useState, useEffect } from 'react'
import {BaseNode} from './BaseNode'

export const DateNode = ({id,data}) => {


const [date,setDate] = useState(new Date().toLocaleString());

useEffect(()=>{
    const interval = setInterval(()=>{
        setDate(new Date().toLocaleString());
    },1000);
    return ()=>clearInterval(interval);
},[])

// dynamic date logging 

  return (
    <BaseNode title={'Date Logger'} outputs={[`${id}-date`]}>
        <p>{date}</p>
    </BaseNode>
  )
}
