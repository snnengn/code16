import React from 'react'

function TaskListItem({item, editTask, removeTask, doneTask}) {
  return (
    <>
    <li className={`list-group-item ${item.isDone && 'list-group-item-success text-decoration-line-through'}`} key={item.uuid}>
                {item.priority && <span className="fs-6 text-warning me-2"><i className="fa-solid fa-star"></i></span>}
              {item.task}
              <div className="btn-group float-end px-2" role="group">

              <button onClick={() => doneTask(item.uuid)}
                className="btn btn-sm btn-success float-end px-3"><i className="fa-solid fa-check"></i></button>

              <button onClick={() => editTask(item.uuid)}
                className="btn btn-sm btn-info float-end px-3"><i className="fa-solid fa-pen-to-square"></i></button>

                <button onClick={() => removeTask(item.uuid)}
                className="btn btn-sm btn-danger float-end px-3"><i className="fa-solid fa-trash"></i></button>
              </div>
            </li>
    </>
  )
}

export default TaskListItem