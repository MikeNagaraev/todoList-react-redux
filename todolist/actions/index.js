let nextTodoId = 0
export const addTodo = (payload) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    payload
  }
}

export const moveLeft = (payload) => {
  return {
    type: 'MOVE_LEFT',
    payload
  }
}

export const moveRight = (payload) => {
  return {
    type: 'MOVE_RIGHT',
    payload
  }
}
