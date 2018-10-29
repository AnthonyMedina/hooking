export function reducer(tasks, action) {
  switch (action.type) {
    case 'ADD':
      return [
        { text: action.payload, created_at: Date.now(), isComplete: false },
        ...tasks
      ];
    case 'DELETE':
      return tasks.filter(task => task !== action.payload);
    case 'TOGGLE_COMPLETE':
      return tasks.map(task => {
        if (task === action.payload)
          return { ...task, isComplete: !task.isComplete };
        return tasks;
      });
    default:
      return tasks;
  }
}
