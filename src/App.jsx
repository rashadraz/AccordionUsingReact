import { useEffect, useState } from 'react'

import './App.css'
import Data from './Data'

function App() {
  
  const url = "https://jsonplaceholder.typicode.com/posts"

  const [showData,setShowData] = useState([])

  const loadData = ()=>{
    fetch(url,{
      method:"GET"
    }).then(res=>res.json())
      .then((result)=>{
        if(result){
          setShowData(result)
        }
      })
       .catch((err)=>{
          console.log(err)
        })

      
  }

  useEffect(()=>{
    loadData()
  },[])
 

  return (
    <div className="container">
      <h5 style={{textAlign:"center",height:"100px",justifyContent:"center",lineHeight:"100px"}}>React Accordion</h5>
     <div className="row">
     {showData.map((item,index)=>{
     return  <div key={index} className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
      <Data {...item}/>
     </div>
     })}
     </div>
    </div>
  )
}

export default App
