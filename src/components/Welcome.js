import React, {Component} from "react";

//class components
class Welcome extends Component{
     // render() {
     //      return <h1>Class Component</h1>
     // }

     //Using Props
     render() {
          return <h1>Welcome {this.props.name}</h1>
     }
}

export default Welcome