import React from 'react'
import { BaseNode } from './BaseNode'

export const LoggerNode = ({id,data}) => {
  return (
    <BaseNode title={'Logger Node'} inputs={[`${id}-log`]} borderColor="#EF4444">
    {/* <p>This Log print whatever it takes</p> */}
    <p>Logging:{data?.value??"No data"}</p>
    </BaseNode>
  )
}
