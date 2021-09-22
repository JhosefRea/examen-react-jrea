import Advices from "./Advices";
import Buscador from "./Buscador";
import TodoList from "./TodoList";
import crearNewAdvice from "./TodoList"

const onSubmit = (input) => ({ 
  text: input
});

function App() {
  return (
    <>
      <Advices />
      <TodoList llama={crearNewAdvice} />
      <Buscador onSubmit={onSubmit}/>
      
    </>
  );
}

export default App;
