import React from 'react'
import './Home1.css'
function Home1(props) {
  

 
  return (
<>

    <div className='all'>
    <h2>Task Name:{props.title}</h2>
    <h3>Task Start date:{props.date}</h3>
    <button onClick={props.onDelete}>Delete Task</button>
    </div>
    </>
  )
}

export default Home1
