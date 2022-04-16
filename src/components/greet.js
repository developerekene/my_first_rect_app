import React from 'react'

//unctional Component
// function Greet(){
//      return <h1>Hello Ekene</h1>
// }

//const Greet = () =>  <h1>This is Ekene</h1>

//Using Props
const Greet = props =>  {

return <h1>This is {props.name}</h1>
}

export default Greet