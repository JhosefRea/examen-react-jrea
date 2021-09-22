import React, { useEffect, useState } from 'react'


function Advices() {
    const url = 'https://api.adviceslip.com/advice'

    const [todos, setTodos] = useState()

    const [devices, setDevices] = useState([{
        id: null,
        value: ''
    }
    ])

   

    const pullApi = async () => {
        const respuesta = await fetch(url)
        console.log(respuesta.status)

        const respuestaJson = await respuesta.json();
        setTodos(respuestaJson)
    };



    useEffect(() => {
        pullApi()

    }, []);

    if (!todos) {
        return "Cargando datos...";
    }


    /*render(){
        let consejos = todos.map((todo, i) =>{
            <p key={i}> {todo.id} {todo.advice} </p>;
        })
    }*/
    const createNewList = devices => {
        if (!devices.find(i => i.value === todos.slip.advice)) {
            setDevices([...devices, { id: todos.slip.id, value: todos.slip.advice }])
        }
    }

    const fNewAdvice = () =>{
        console.log(devices);
    }

    return (
        <div>

            <div>
                <div>
                    <h1>Consejo del día</h1>
                </div>
                <div>
                    <strong>id:</strong> {todos.slip.id}
                </div>
                <div>
                    <strong>advice:</strong> {todos.slip.advice}
                </div>
                <div>
                    <button onClick={setDevices}>Marcar como favorito</button>

                    <button onClick={pullApi} >Siguiente consejo</button>

                </div>



            </div>

            <div>
                <div>
                    <h1>Consejo favoritos</h1>
                </div>

                <div>
                    <strong>advice:</strong> {todos.slip.advice}
                </div>
                <div>
                    <button>Quitar de la lista</button>

                </div>

            </div>

        </div>


    )

    /*return (
        <div>
            <ul>
                {
                    !todos ? 'Cargando...' : todos.map((todo, index) => {
                        return <li>{todo.slip.id} </li>

                    })

                }
            </ul>
        </div>
    )*/


}

export default Advices
