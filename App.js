import AddTask from "./components/addtask";
import ListTask from "./components/listtask";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <h1>Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;

