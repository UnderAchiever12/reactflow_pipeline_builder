import React, { useState } from 'react'
import { BaseNode } from './BaseNode'

export const CustomTextNode = ({id,data}) => {

    const [customText,setCustomText] = useState(data?.text|| '');
    const [submittedText,setSubmittedText] = useState('');
    const handleTextChange = (e) => {
        setCustomText(e.target.value);
    }

    const handleSubmit = () => {
        console.log('Submitted:', customText);
        setSubmittedText(customText);
    }

  return (
    <BaseNode title={'Custom Text Node'} inputs={[`${id}-input`]} outputs={[`${id}-output`]}>
        <label>
            Custom Text:
            <input type='text' value={customText} onChange={handleTextChange} style={{ width: '100%', marginBottom: '8px' }}/>
        </label>
        <button onClick={handleSubmit}>Submit</button>
        {submittedText && <p  style={{ fontSize: '12px', marginTop: '5px' }}>Submitted Text: {submittedText}</p>}
    </BaseNode>
  )
}
