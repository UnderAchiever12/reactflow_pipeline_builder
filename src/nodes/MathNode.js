import React, { useEffect, useState } from 'react'
import { BaseNode } from './BaseNode'

export const MathNode = ({id,data}) => {
  const [result,setResult] = useState(0);

    const a = parseFloat(data?.inputs?.[`${id}-a`]) || 0;
    const b = parseFloat(data?.inputs?.[`${id}-b`]) || 0;

    useEffect(()=>{
      setResult(a+b);
    },[a,b]);

  return (
    <BaseNode title={'Math Node'} inputs={[`${id}-a`,`${id}-b`]} outputs={[`${id}-sum`]}>
    <p>
      a:{a} <br/>
      b:{b} <br/>
      Sum:{result}
    </p>
    </BaseNode>
  )
}
