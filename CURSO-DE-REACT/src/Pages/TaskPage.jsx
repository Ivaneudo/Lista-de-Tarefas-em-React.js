import { useSearchParams } from "react-router-dom";
import './TaskPage.css';
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage () {

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navegate = useNavigate();

  return (
    <>
      <div className="Detalhes">
        <button onClick={() => navegate(-1)}><ChevronLeftIcon/></button>
        <Title>Descrição da Tarefa</Title>
      </div>
      <div className="TaskPage">
        <Title> {title}</Title>
        <div className="paragrafo">
          <p>{description}</p>
        </div>
      </div>
      
    </>
  );
}

export default TaskPage;