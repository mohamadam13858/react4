import React, { forwardRef, useEffect, useRef, useState } from "react";


let counter = 0


const Fconponent = (props , ref) => {

    const [name, setName] = useState("")

    const myInput = useRef();



    const handleChangeName = () => {

        setName(ref.current.value)
    }

    return (
        <div className='form-fa-group text-center mt-4 p-3 container '>
            <h4 className=' text-center text-dark '>حدث کلمه</h4>
            <input ref={ref} type="text" className=' form-control shadow-lg text-Light d-flex  w-50 m-auto '
            autoComplete="off" />
            <button className='btn btn-warning my-3' onClick={handleChangeName}>ثبت</button>
            <button className='btn btn-success my-3 mx-2'
                onClick={() => {ref.current.value = ""}}>مخفی</button>
            <br />
            <span  >{counter++}</span>
        </div>
    )

}
export default forwardRef(Fconponent);