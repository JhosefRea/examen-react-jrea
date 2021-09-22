import React, {useState} from 'react'


function Buscador(props) {
    const [input, setInput] = useState('')

    const handleChange = e =>{
        setInput(e.target.value)
    } 

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
           text: input
        });

        setInput('')
    };

    return (

        <div>
            <div>
                <h1>Buscador de consejos</h1>
            </div>
        
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="palabra clave" value={input}
                    name="text" className="todo-input"
                    onChange={handleChange } 
                />

                <button className="todo-button" onClick = {handleSubmit}>Buscador</button>

            </form>
        </div>


    )



    /*return (
        <div>
            <div>
                <h1>Buscador de consejos</h1>
            </div>
            
            <input type="text" id="buscador" name="buscador" required>
            
            <div>
                <strong>advice:</strong> {todos.slip.advice}
            </div>
            <div>
                <button>Marcar como favorito</button>
                <button>Siguiente consejo</button>

            </div>



        </div>
    )*/
}

export default Buscador
