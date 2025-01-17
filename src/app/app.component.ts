

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from './services/task.service';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { Task } from './services/task.service';
import { DeleteConfirmationDialogComponentComponent } from './components/delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= 'ng-training-todo-app';
  tasks: Task[] = [];
  displayedColumns: string[] = ['assignedTo', 'status', 'dueDate', 'priority', 'actions'];

  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  openTaskForm():void {
    this.dialog.open(TaskFormComponent,{
      data:{
        assignedTo: '',
        status: 'Not Started',
        dueDate: null,
        property: 'Normal',
        description: ''
      }
    })
  }


  refreshTasks() {
    this.tasks = this.taskService.getTasks();  // Ensure this is updating tasks correctly
  }

  editTask(task:Task) {
    this.dialog.open(TaskFormComponent, { data: task });
  }

  deleteTask(task:Task) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponentComponent);
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.taskService.deleteTask(task.id);  // Ensure correct task deletion
        this.refreshTasks();  // Refresh the task list after deletion
      }
    });
  }
}