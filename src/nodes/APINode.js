import React, { useState } from 'react'
import {BaseNode} from './BaseNode'
export const APINode = ({id,data}) => {

const [url,setUrl] = useState(data?.url|| '');
const [responseData,setResponseData] = useState('');

const handleUrlChange = (e) => {
    setUrl(e.target.value);
}

const handleFetch = async () => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        setResponseData(JSON.stringify(json,null,2));
    }catch(err) {
        setResponseData('Error fetching data');
    }
}

// here we can call an api 

  return (
    <BaseNode title={'API'} inputs={[]} outputs={[`${id}-response`]}>
        <label>
            URL:
            <input type='text' value={url} onChange={handleUrlChange} style={{width:'100%'}}/>
            <button onClick={handleFetch} style={{marginTop:8}}>Fetch</button>
            <p style={{ maxHeight: '100px', overflow: 'auto', fontSize: '12px' }}>{responseData}</p>
        </label>
    </BaseNode>
  )
}
