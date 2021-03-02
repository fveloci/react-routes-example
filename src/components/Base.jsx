import React, {useState, useEffect} from 'react';


const Base = () => {

    const [nombre, setNombre] = useState('Pedro');

    useEffect ( () => {       
      setTimeout(() => {
        setNombre('Manual')
      },2000)  
    })

    return (
        <div className="jumbotron">
            <h1>Pagina de Base</h1>
            {nombre}
        </div>
    )
}

export default Base
