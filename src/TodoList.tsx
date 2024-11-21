import React from 'react'

interface Props {
    inputText: string;
  }

const TestComp1 = ({inputText}:Props) => {
  return (
    <div>
      {inputText}
      <p>Hi!</p>
    </div>
  )
}

const TestComp2 = ({inputText}:Props) => {
  return (
    <div>
      {inputText}
      <p>Hey!</p>
    </div>
  )
}

export {TestComp1,TestComp2}