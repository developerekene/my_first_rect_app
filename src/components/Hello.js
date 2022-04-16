import React from "react";

const Hello = () => {
     // return(
     //      <div>
     //           <h1>First React Project</h1>
     //      </div>
     // )

     //using Javascript xml
     return React.createElement(
          'div', 
          {id: 'myid', className: 'myclassname'}, 
          React.createElement('h1', null, 'Using JSX in React'
          ))
}

export default Hello