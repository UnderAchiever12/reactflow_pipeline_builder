// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
   <BaseNode title={'Output'} inputs={[`${id}-value`]}>

    <label>
      Name:
<input type='text' value={currName} onChange={handleNameChange}  style={{
      width: '100%',
      padding: '6px',
      marginTop: '4px',
      border: '1px solid #D1D5DB',
      borderRadius: '4px',
    }} />
    </label>
    <label>
      Type:
      <select value={outputType} onChange={handleTypeChange} style={{
    width: '100%',
    padding: '6px',
    marginTop: '4px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
  }}  >
        <option>Text</option>
        <option>File</option>
      </select>
    </label>
   
   </BaseNode>
  );
}
