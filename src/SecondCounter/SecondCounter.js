import React from "react";

class SecondCounter extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         count: 1
    //     }
    // }
    componentDidMount(){
        this.props.hideSum(false);
    }
    componentWillUnmount(){
        console.log('second counter unmounted')
    }

    render(){
        return( 
        <div>
           Mult is {this.props.y}
        </div>
        )
    }
}

 export default SecondCounter;