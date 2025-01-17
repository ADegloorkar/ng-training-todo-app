import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Task } from "../../services/task.service";

@Component ({
selector:'app-task-form',
templateUrl:'./task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.data =this.data || {
      assignedTo:'',
      status: '',
      dueDate: null,
      priority: '',
      description: ''
    };
    
  }
  onCancel(): void {
    this.dialogRef.close();
    console.log("Cancle clicked")
  }
  onSave(): void {
    // Save the task (data object)
    this.dialogRef.close(this.data);
    console.log('Task saved: ', this.data);
  }
 
  
}