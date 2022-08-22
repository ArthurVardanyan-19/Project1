//  function FirstComponent(){
//     return (
//         <div>
//             FirstComponent
//         </div>
//     )
//  }

import React from "react";

class FirstComponent extends React.Component{
// constructor(){
//     super();
//     this.state = {
//         count: 0
//     }
// }

    componentDidMount(){
        console.log('Hi')
    }
    
    componentDidUpdate() {
        console.log('Updated')
    }
    render(){
        return( 
        <div>
            Sum is {this.props.x}
        </div>
        )
    }
}

 export default FirstComponent;