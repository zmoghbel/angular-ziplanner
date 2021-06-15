import { createEntityAdapter, EntityAdapter, EntityState } 
from '@ngrx/entity';
 
import { Todo } from '../models/todo';
 
export interface TodoState {
  selectedTodo: Todo,
  todos: Todo[],  
  isLoading?: boolean; 
  error?: any;
}
 
export const initialState: TodoState = 
{
    selectedTodo: null,
    todos: [],  
    isLoading: false,
    error: null
};