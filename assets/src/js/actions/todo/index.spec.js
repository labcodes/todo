import {
  ADD_TODO,
  ADD_TODOS,
  REMOVE_TODO,
  addTodo,
  addTodos,
  removeTodo
} from './index';

describe('add ToDo action', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(
      addTodo({name: 'name', 'id': 1})
    ).toEqual({
      type: ADD_TODO,
      payload: {name: 'name', 'id': 1}
    })
  })
})

describe('add ToDos action', () => {
  it('addTodos should create ADD_TODOS action', () => {
    expect(
      addTodos([{name: 'name', 'id': 1}])
    ).toEqual({
      type: ADD_TODOS,
      payload: [{name: 'name', 'id': 1}]
    })
  })
})

describe('remove ToDo action', () => {
  it('removeTodo should create REMOVE_TODO action', () => {
    expect(
      removeTodo({'id': 1})
    ).toEqual({
      type: REMOVE_TODO,
      payload: {'id': 1}
    })
  })
})
