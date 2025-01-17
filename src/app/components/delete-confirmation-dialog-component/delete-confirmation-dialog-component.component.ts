import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-dialog-component',
  template: `
    <h1 mat-dialog-title>Confirm Delete</h1>
    <div mat-dialog-content>
      Are you sure you want to delete this task?
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close="false">Cancel</button>
      <button mat-button color="warn" mat-dialog-close="true">Delete</button>
    </div>
  `,
  
})
export class DeleteConfirmationDialogComponentComponent {

}
