import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task.component";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Walk the dog",
    "Description 1",
    false,
    LEVELS.REGULAR
  );
  const defaultTask2 = new Task(
    "Do the dishes",
    "Description 2",
    true,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Work",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   console.log("Tasks state as been modified");
  //   setLoading(false);

  //   return () => {
  //     console.log("TaskListComponent is going to unmount...");
  //   };
  // }, [tasks]);

  const completeTask = (task) => {
    const taskIndex = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[taskIndex].completed = !task.completed;
    setTasks((task = tempTask));
  };

  const removeTask = (task) => {
    const taskIndex = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(taskIndex, 1);
    setTasks((task = tempTask));
  };

  const addTask = (task) => {
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks((task = tempTask));
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          <div
            className="card-body"
            style={{ position: "relative", heigth: "400px" }}
          >
            <table>
              <tbody>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task}
                      complete={completeTask}
                      remove={removeTask}
                    ></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
          <TaskForm add={addTask}></TaskForm>
          </div>
        </div>
      </div>
    </div>
  );
};

// TaskListComponent.propTypes = {

// };

export default TaskListComponent;
