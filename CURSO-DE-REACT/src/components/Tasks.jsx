import { useNavigate } from "react-router-dom";
import "./Tasks.css";
import { ChevronRightIcon, TrashIcon } from "lucide-react"

function Tasks (props) {

  const navegate = useNavigate();

  function onSeeDetailsClick (tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navegate(`/task?${query.toString()}`);
  }

  return (
    <>
      <ul className="Tasks">
        {props.tasks.map((tasks) => (
        <li key={tasks.id}>
          <button onClick={() => props.onTesksClick(tasks.id)} className={`buttonText ${tasks.isCompleted && 'line'}`}>
            {tasks.title}
          </button>
          <button onClick={() => onSeeDetailsClick(tasks)} className='detalhes'>
            <ChevronRightIcon/>
          </button>
          <button onClick={() => props.onDeliteTaskClick(tasks.id)} className='detalhes'>
            <TrashIcon/>
          </button>
        </li>
      ))}</ul>
    </>
  );
}

export default Tasks;