import todo from './index';

describe('todo reducer', () => {

  const todoItem = {
    id: 1,
    name: 'Do stuff'
  };
  const emptyState = [];
  const notEmptyState = [todoItem];

  it('should handle initial state', () => {
    expect(
      todo(undefined, {})
    ).toEqual(
      emptyState
    )
  })

  it('should handle ADD_TODO', () => {
    const addTodoAction = {
      type: 'ADD_TODO',
      payload: todoItem
    }

    expect(
      todo(emptyState, addTodoAction)
    ).toEqual(
      notEmptyState
    )
  })

  it('should handle ADD_TODOS', () => {
    const addTodosAction = {
      type: 'ADD_TODOS',
      payload: [todoItem]
    }

    expect(
      todo(emptyState, addTodosAction)
    ).toEqual(
      notEmptyState
    )
  })

  it('should handle REMOVE_TODO', () => {
    const removeTodoAction = {
      type: 'REMOVE_TODO',
      payload: todoItem
    }

    expect(
      todo(notEmptyState, removeTodoAction)
    ).toEqual(
      emptyState
    )
  })

  it('should ignore non existing id', () => {
    const removeTodoAction = {
      type: 'REMOVE_TODO',
      payload: {id: 2}
    }

    expect(
      todo(notEmptyState, removeTodoAction)
    ).toEqual(
      notEmptyState
    )
  })

})
