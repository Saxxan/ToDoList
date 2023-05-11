export default function TaskCatItem(props) {
  return (
    <li className="taskCatItem">
      <h3 className="taskCatTitle">{props.taskCategory.taskCategory}</h3>
    </li>
  );
}
