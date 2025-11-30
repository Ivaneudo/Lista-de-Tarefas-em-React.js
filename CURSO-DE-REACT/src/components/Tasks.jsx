import { useNavigate } from "react-router-dom";
import "./Tasks.css";
import { ChevronRightIcon, TrashIcon } from "lucide-react"
import Button from "./Button"

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
          <Button onClick={() => props.onTesksClick(tasks.id)} className={`buttonText ${tasks.isCompleted && 'line'}`}>
            {tasks.title}
          </Button>
          <Button onClick={() => onSeeDetailsClick(tasks)} className='detalhes'>
            <ChevronRightIcon/>
          </Button>
          <Button onClick={() => props.onDeliteTaskClick(tasks.id)} className='detalhes'>
            <TrashIcon/>
          </Button>
        </li>
      ))}</ul>
    </>
  );
}

export default Tasks;