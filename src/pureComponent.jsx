import React, { Component, memo, PureComponent } from 'react';
import ReactDOM from 'react-dom';

/*class PureCompo extends PureComponent{
    render(){
        return(
<h2 className='text-center mt-4'>pure component
    {"pure component :" +this.props.name}
</h2>
        )
    }
}*/
const PureCompo = (props)=>{
    return(
        <h2 className='text-center mt-4'>pure component
            {"pure component :" +props.name}
        </h2>
                )
            }
export default memo(PureCompo);