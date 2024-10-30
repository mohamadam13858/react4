import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import PureCompo from './pureComponent';

class PrentConpo extends Component {
    constructor(){
        super()
        this.componentRef = createRef();
    }
    handleChangeCompoName = ()=>{
        this.componentRef.current.handleChangeName();
    }
    render() {
        return (
            <div>
                <PureCompo ref={this.componentRef} />
                <button className="btn btn-info my-3" onClick={this.handleChangeCompoName} >test</button>
            </div>
        )
    }
}
export default PrentConpo;