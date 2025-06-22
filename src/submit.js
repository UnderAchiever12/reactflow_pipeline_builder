// submit.js
import React from 'react'

import {useReactFlow} from 'reactflow';



export const SubmitButton = () => {

    const {getNodes,getEdges} = useReactFlow();

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();

        const payload = {nodes,edges};

        const res = await fetch('http://localhost:8000/pipelines/parse',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(payload)
        })

        const data = await res.json();

        alert(`Nodes:${data.num_nodes}\nEdges:${data.num_edges}\nis_DAG:${data.is_dag?"Yes":"No"}`)

    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
