// Styles
import "./styles/globals.scss";

// Components
import TaskCatList from "./components/TaskCatList";

export default function Home() {
  return (
    <main className="main">
      <section className="tasksCategories">
        <h2 className="titleH2">Task categories</h2>
        <TaskCatList />
      </section>
    </main>
  );
}
