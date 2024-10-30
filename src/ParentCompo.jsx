import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import PureCompo from './pureComponent';
import Fconponent from './Fcomponent';

class PrentConpo extends Component {
    constructor(){
        super()
        this.myInput = createRef()
    }
    componentDidMount(){
        this.myInput.current.focus()
    }
    render() {
        return (
            <div>
            { /*   <PureCompo/>*/}
            <Fconponent ref={this.myInput}/>
            </div>
        )
    }
}
export default PrentConpo;