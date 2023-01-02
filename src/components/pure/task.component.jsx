import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/task.scss";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
  // useEffect(() => {
  //   console.log("TaskComponent created");
  // }, []);

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.REGULAR:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  };

  const taskIconCompleted = () =>
    task.completed ? (
      <i onClick={()=>complete(task)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>
    ) : (
      <i onClick={()=>complete(task)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i>
    );

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
        <span className="aling-middle">{task.description}</span>
      </td>
      <td>{taskLevelBadge()}</td>
      <td>
        <span className="aling-middle">{taskIconCompleted()}</span>
      </td>
      <td className="aling-middle">
        <i className="bi-trash task-action" style={{ color: "black" }} onClick={()=>remove(task)}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
};

export default TaskComponent;
