import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
  const { name } = useSelector((state: any) => state.test)
  const dispath = useDispatch()

  function changeName() {
    const data = { name: '小龙' }
    dispath({
      type: 'increment',
      data
    })
  }

  return (
    <div>
      <h1>TestName: {name}</h1>
      <button onClick={changeName}>点我改名</button>
    </div>
  )
}
