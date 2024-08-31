import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test Initial Render
  test('renders initial todos', () => {
    render(<TodoList />);
    
    // Check that initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  // Test Adding Todos
  test('adds a new todo', () => {
    render(<TodoList />);
    
    // Find the input and button elements
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    // Simulate user input and button click to add a new todo
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    // Verify the new todo appears in the document
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test Toggling Todos
  test('toggles a todo completed state', () => {
    render(<TodoList />);
    
    // Find the todo item element
    const todoItem = screen.getByText('Learn React');
    
    // Simulate a click to toggle the completed state
    fireEvent.click(todoItem);
    
    // Verify the completed style is applied
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todoItem);
    
    // Verify the completed style is removed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test Deleting Todos
  test('deletes a todo', () => {
    render(<TodoList />);
    
    // Find the delete button for the first todo
    const deleteButton = screen.getAllByText('Delete')[0];
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    
    // Verify the todo is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

});
