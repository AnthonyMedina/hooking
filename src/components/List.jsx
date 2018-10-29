import React from 'react';

const List = ({ tasks, dispatch }) => {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={task.created_at}>
          <span
            style={{
              textDecoration: task.isComplete ? 'line-through' : 'none'
            }}
            onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: task })}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch({ type: 'DELETE', payload: task })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
