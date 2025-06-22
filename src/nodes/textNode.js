// textNode.js

import { useState,useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dynamicInputs,setDynamicInputs] = useState([])

  const textareaRef = useRef();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    const input = e.target.value;
    const matches = input.match(/{{\s*([\w]+)\s*}}/g);
    // text logic , handling inputs 
    // regex patterns for that 
    const variableNames = matches ? [...new Set(matches.map(m=>m.match(/{{\s*([\w]+)\s*}}/)[1]))] : [];
    setDynamicInputs(variableNames);
    if(textareaRef.current) {
      textareaRef.current.style.height='auto';
      textareaRef.current.style.height=`${textareaRef.current.scrollHeight}px`
    }
  };

  return (
    <BaseNode title={'Text'} inputs={dynamicInputs.map(v=>`${id}-${v}`)} outputs={[`${id}-output`]}>
      <label>
        Name:
        <textarea ref={textareaRef} value={currText} onChange={handleTextChange} style={{  width: '100%',
  resize: 'none',
  overflow: 'hidden',
  fontSize: '14px',
  lineHeight: '20px',}}/>
      </label>
    </BaseNode>
  );
}

// till now i did changes in the existing files 
// now i will show the ones which i created, i.e new files 
