// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode title='Input' outputs={[`${id}-value`]} style={{
      width: '100%',
      padding: '6px',
      marginTop: '4px',
      border: '1px solid #D1D5DB',
      borderRadius: '4px',
    }} >
      <label>Name:
        <input type='text' value={currName} onChange={handleNameChange}/>
      </label>
      <label>Type:
        <select value={inputType} onChange={handleTypeChange}   style={{
    width: '100%',
    padding: '6px',
    marginTop: '4px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
  }} >
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
}
