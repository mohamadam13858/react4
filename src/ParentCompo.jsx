import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PureCompo from './pureComponent';

class PrentConpo extends Component {
    constructor() {
        super()
        this.state = {
            name: "mohamad"
        }

    }

componentDidMount(){
    setInterval(()=>{
     this.setState({
        name:"mohamad"+ new Date()
     })
    },1000)
}


    render() {
        return (
            <div>
                <PureCompo name={this.state.name} />
            </div>
        )
    }
}
export default PrentConpo;