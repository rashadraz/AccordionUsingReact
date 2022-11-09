import React, { useState } from 'react'
import './Data.css'
import { FcExpand,FcCollapse } from "react-icons/fc";

function Data({title , body }) {
    const [show , setShow] = useState(false)

    const handleClick  = ()=>{
        setShow((prev)=>!prev)
    }
  return (
    <div className={show ?  "accordion-opened accordion-item" :'accordion-item' } onClick={handleClick} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <div className='accordion-title'>
             <h5>{title}</h5>
             <p>
                {show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}
                
            </p>
        </div>
       <div>
        {show &&  <p>{body}</p>}
           
        </div>
        
    </div>
  )
}

export default Data