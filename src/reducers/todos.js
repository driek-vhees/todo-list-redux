const todos = (state = [], { type, id, newTodo }) => {
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          ...newTodo,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (
        todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default todos;
