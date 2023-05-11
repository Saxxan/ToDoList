function TaskPanel(props) {
  return (
    <section className="tasks">
      <h2 className="titleH2">Tasks</h2>
      <ul className="tasksList">
        {props.tasks.map((task) => (
          <li key={task.id} className="taskItem">
            {task.taskName}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskPanel;
