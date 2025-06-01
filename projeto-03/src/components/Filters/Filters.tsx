import { useGlobalContext } from "../../context/GlobalContext";
import './Filters.css';



export default function Filters() {

    const {tasks, handleSetTasks, handleSetFilter} = useGlobalContext();
    const pendingTasksQtd = tasks.filter((task) => !task.done).length;
    function handleUncheckAll() {
       const filteredTasks = tasks.map((task) => (task.done ? { ...task, done: false } : task));
       handleSetTasks(filteredTasks);
    }

    return (
        <li className='content-tasks__actions'>
            <div>
                <a href="#">{pendingTasksQtd} Itens Restantes</a>
            </div>
            <div>
                <a href="#" onClick={() => handleSetFilter("all")}>Todas</a>
                <a href="#" onClick={() => handleSetFilter("pending")}>Ativas</a>
                <a href="#" onClick={() => handleSetFilter("done")}>Completadas</a>
            </div>
            <div>
                <a href="#" onClick={handleUncheckAll}>Limpar Completados</a>
            </div>
        </li>
    )
}