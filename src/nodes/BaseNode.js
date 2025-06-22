import React,{useState} from 'react';
import {Handle,Position} from 'reactflow';

export const BaseNode = ({title,inputs=[],outputs=[],children}) => {
  return (
    <div
     style={{
      width: 220,
       height: 120,
        border: '1px solid black',
        borderRadius:'10px',
        padding:'10px',
        fontFamily:'sans-serif',
        position:'relative',
        backgroundColor:'#FFFFFF',
        boxShadow:'0 2px 2px rgba(0,0,0,0.5)'
    }}
      >   
      <strong style={{fontSize:'16px',color:'#111827'}}>{title}</strong>
      {/* left side handle  */}
      {inputs.map((id,index)=>(
       <Handle key={index} type='target' position={Position.Left} id={id} style={{top:`${(index+1)*25}%`,width:10,height:10,borderRadius:'50%',backgroundColor:'#6B7280'}}/>
      ))}
      {/* content to display  */}
      {/* children code  */}
      <div style={{marginTop:10,padding:5}}>{children}</div>
      {/* right side handle  */}
      {outputs.map((id,index)=>(
        <Handle key={index} type='source' position={Position.Right} id={id} style={{top:`${(index+1)*25}%`,width:10,height:10,borderRadius:'50%',backgroundColor:'#2563EB'}}/>
      ))}
    </div>
  )
}
