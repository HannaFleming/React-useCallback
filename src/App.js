import './App.css';
import React, { useCallback, useState } from 'react'


function App() {

  const [city, setCity] = useState('')

  const handleOnChange = (e) => {
    setCity(e.target.value)
  }

  const handleShow = useCallback (() => {
    console.log(city)
  },[city])


return(
  <div>
    <input onChange={handleOnChange}/>
    <button onClick={handleShow}>Show me your city</button>
  </div>
)

}

export default App;
