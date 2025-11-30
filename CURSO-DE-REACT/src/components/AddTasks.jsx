import { useState } from 'react';
import './AddTasks.css'


function AddTasks (props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className='AddTasks'>
        <input 
          type="text" 
          placeholder="Titulo da tarefa: "
          value={title}
          onChange={event => {setTitle(event.target.value)}}
        />
        <input 
          type="text" 
          placeholder="Descrição da sua tarefa: " 
          value={description}
          onChange={event => {setDescription(event.target.value)}}
        />
        <button
          onClick={() => {

            if (!title.trim() || !description.trim()) {
              return alert(`Preencha os campos de Titulo e Descrição da tafera para continuar.`);
            }

            props.onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
        >Adicionar tarefa.</button>
      </div>
    </>
  );
}

export default AddTasks;