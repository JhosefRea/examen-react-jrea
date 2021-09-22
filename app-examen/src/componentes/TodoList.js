import React, {useState} from 'react'

const TodoList = props => {
    const [newAdvice, setnewAdvice ] = useState('');

    const updateNewAdvice = e => setnewAdvice(e.target.value);
     //tomando la información del evento, capturando nuevo valor

    const bNewAdvice = () =>{
        console.log(newAdvice);
        setnewAdvice('') //entrada limpia
    }
    

    return (
        <div>
            {/*<input
                type = "text"
                value = {
                    newAdvice
                }
                onChange = {updateNewAdvice}
            />
            */ }
            <button onClick ={bNewAdvice}>
                  
            </button>    
            
        </div>
    )
}

export default TodoList
