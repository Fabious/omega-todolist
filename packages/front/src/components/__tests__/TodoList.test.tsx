import React from 'react'
import { render } from '@testing-library/react'
import { TodoList } from '../TodoList'

describe('TodoList', () => {
  const todos = [
    { task: 'acheter du pain', done: true },
    { task: 'payer les factures', done: false },
  ]

  function renderTodoList() {
    return render(<TodoList />)
  }

  it('displays the list of todos', () => {
    const { queryByText } = renderTodoList()

    expect(queryByText(todos[0].task)).not.toBeNull()
    expect(queryByText(todos[1].task)).not.toBeNull()
  })
})
