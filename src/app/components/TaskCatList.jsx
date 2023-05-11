'use client'

// React
import { useEffect, useState } from "react";

// Data
import taskBattery from "../data/taskBattery.json";

// Components
import TaskCatItem from "./TaskCatItem";
import TaskPanel from "./TaskPanel";

function TaskCatList() {
  const [activeTaskCatId, setActiveTaskCatId] = useState();
  const [activeTasks, setActiveTasks] = useState();

  useEffect(() => {
    if(activeTaskCatId) {
      let tasks = taskBattery.filter((item) => item.id === activeTaskCatId);
      setActiveTasks(tasks[0].tasks);
    }
  }, [activeTaskCatId]);

  return (
    <>
      <ul className="tasksCatList">
        {taskBattery.map((item) => (
          <TaskCatItem
            key={item.id}
            taskCategoryTitle={item.taskCategoryTitle}
            taskCatId={item.id}
            activeTaskId={activeTaskCatId}
            handleClick={setActiveTaskCatId}
          />
        ))}
      </ul>
      {activeTasks && <TaskPanel tasks={activeTasks} />}
    </>
  );
}

export default TaskCatList;
