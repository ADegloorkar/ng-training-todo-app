import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { DeleteConfirmationDialogComponentComponent } from './components/delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';
import { TestLabelComponent } from './test-label/test-label.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    DeleteConfirmationDialogComponentComponent,
    TestLabelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Required for Angular Material animations
    FormsModule,              // Required for FormsModule & ngModel
    // Angular Material Modules
    MatToolbarModule,         // Toolbar
    MatTableModule,           // Table
    MatPaginatorModule,       // Paginator
    MatButtonModule,          // Buttons
    MatDialogModule,          // Dialogs
    MatInputModule,           // Input fields
    MatFormFieldModule,       // Form Fields
    MatSelectModule,          // Select dropdown
    MatDatepickerModule,      // Datepicker
    MatNativeDateModule,      // Native Date Support
    MatIconModule,            // Icon Support
  ],
  providers: [],
  bootstrap: [AppComponent],  // Bootstrap the root component
})
export class AppModule {}
