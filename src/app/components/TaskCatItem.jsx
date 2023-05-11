'use client'

function TaskCatItem(props) {
  
  /**
   * Function to handle click in one of the task category cards
   * in order to select that one as current task category
   */
  const handleClick = () => {
    props.handleClick(props.taskCatId);
  };

  return (
    <li
      className={
        props.activeTaskId === props.taskCatId
          ? "taskCatItem active"
          : "taskCatItem"
      }
      onClick={handleClick}
    >
      <h3 className="taskCatTitle">{props.taskCategoryTitle}</h3>
    </li>
  );
}

export default TaskCatItem;
