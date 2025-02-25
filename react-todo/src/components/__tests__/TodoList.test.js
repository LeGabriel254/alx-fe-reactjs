import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe(TodoList, () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('I love football')).toBeInTheDocument();
    expect(screen.getByText('I listen to music')).toBeInTheDocument();
    expect(screen.getByText('I do coding!!')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo completed state', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('I love football');
    fireEvent.click(todoItem);
    
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem);
    
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('I love football')).not.toBeInTheDocument();
  });
});
