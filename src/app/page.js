// Styles
import "./styles/globals.scss";

// Components
import TaskCatItem from "./components/TaskCatItem";

const taskBattery = [
  {
    id: 1,
    taskCategory: "Home",
    tasks: [
      {
        task: "Poner lavadora",
        completed: false,
      },
      {
        task: "Poner lavadora",
        completed: false,
      },
      {
        task: "Poner lavadora",
        completed: false,
      },
      {
        task: "Poner lavadora",
        completed: false,
      },
      {
        task: "Poner lavadora",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    taskCategory: "Proyecto",
    tasks: [
      {
        task: "Crear componente",
        completed: false,
      },
      {
        task: "Crear componente",
        completed: false,
      },
      {
        task: "Crear componente",
        completed: false,
      },
      {
        task: "Crear componente",
        completed: false,
      },
      {
        task: "Crear componente",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    taskCategory: "Deportes",
    tasks: [
      {
        task: "Comprar mancuernas",
        completed: false,
      },
      {
        task: "Comprar mancuernas",
        completed: false,
      },
      {
        task: "Comprar mancuernas",
        completed: false,
      },
      {
        task: "Comprar mancuernas",
        completed: false,
      },
      {
        task: "Comprar mancuernas",
        completed: false,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="main">
      <section className="tasksCategories">
        <h2 className="titleH2">Task categories</h2>
        <ul className="tasksCatList">
          {taskBattery.map((item) => (
            <TaskCatItem taskCategory={item} key={item.id} />
          ))}
        </ul>
      </section>

      <section className="tasks">
        <h2 className="titleH2">Tasks</h2>
        <ul className="tasksList">
          <li className="taskItem"></li>
          <li className="taskItem"></li>
          <li className="taskItem"></li>
          <li className="taskItem"></li>
          <li className="taskItem"></li>
          <li className="taskItem"></li>
        </ul>
      </section>
    </main>
  );
}
