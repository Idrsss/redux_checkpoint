import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/todoSlice";
import Task from "./task";

function ListTask() {
  const dispatch = useDispatch();
  const { list, filter } = useSelector((state) => state.todos);

  const filteredList =
    filter === "done"
      ? list.filter(t => t.isDone)
      : filter === "not"
      ? list.filter(t => !t.isDone)
      : list;

  return (
    <div className="filter-buttons">
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("not"))}>Not Done</button>
      </div>

      <hr />

      {filteredList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
