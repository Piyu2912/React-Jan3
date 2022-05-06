import React from 'react'



const Clock = () => {
    
    const Time = () => {
        const time = new Date().toLocaleTimeString();
        return <h1> Time: {time} </h1>
    }

    setInterval(() => {
        return (
            <div style={{backgroundColor:"blue"}}>
                <h1>Web app Clock</h1>
                <Time/>
            </div>
          )
    }, 1000);
  
}

export default Clock