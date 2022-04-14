const initState = { name: '小刘', age: 18 }


export default function test(preState = initState, action: { type: any; data: any }) {
  const { type, data } = action

  switch (type) {
    case 'increment':
      return {
        preState,
        ...data
      }
    default:
      return preState
  }
}
