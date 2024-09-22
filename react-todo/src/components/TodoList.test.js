import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo completed state', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
