function completedSort(t1, t2) {
  if (t1.completed === t2.completed) {
    return 0;
  }
  return t1.completed ? 1 : -1;
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ].sort(completedSort);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ).sort(completedSort);
    default:
      return state
  }
}

export default todos