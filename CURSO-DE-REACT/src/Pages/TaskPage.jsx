import { useSearchParams } from "react-router-dom";
import './TaskPage.css';
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage () {

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navegate = useNavigate();

  return (
    <>
      <div className="Detalhes">
        <button onClick={() => navegate(-1)}><ChevronLeftIcon/></button>
        <h1>Descrição da Tarefa</h1>
      </div>
      <div className="TaskPage">
        <h1> {title}</h1>
        <p>{description}</p>
      </div>
      
    </>
  );
}

export default TaskPage;