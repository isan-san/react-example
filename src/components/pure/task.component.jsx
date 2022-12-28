import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/task.scss";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("TaskComponent created");
    return () => {
      console.log(`TaskComponent ${task.name} is going to unmount`);
    };
  }, [task]);

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
      <i className="bi-toggle-on" style={{ color: "green" }}></i>
    ) : (
      <i className="bi-toggle-off" style={{ color: "grey" }}></i>
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
        <i className="bi-trash" style={{ color: "black" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
