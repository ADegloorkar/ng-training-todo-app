import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  assignedTo: string;
  status: string;
  dueDate: string;
  priority: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Task 1' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'Task 2' }
  ];

  getTasks() {
    return this.tasks;
  }

  deleteTask(id:number):void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
