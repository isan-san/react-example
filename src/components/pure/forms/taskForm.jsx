import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.REGULAR);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  };

  return (
    <form
      className="d-flex juststify-content-center align-items-center mb-4"
      onSubmit={addTask}
    >
      <div className="form-outline flex-fill">
        <input
          className="form-control m-1"
          ref={nameRef}
          id="inputName"
          type="text"
          required
          autoFocus
          placeholder="Task name"
        />
        <input
          className="form-control m-1"
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          required
          placeholder="Task description"
        />
        {/* <label htmlFor="inputLevel" className="sr-only">
          Priority
        </label> */}
        <select className="from-select m-1" ref={levelRef} id="inputLevel" defaultValue={LEVELS.REGULAR} aria-label="Default select example">
          <option value={LEVELS.REGULAR}>Regular</option>
          <option value={LEVELS.URGENT}>Uregent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2">Add task</button>
    </form>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequierd,
};

export default TaskForm;
