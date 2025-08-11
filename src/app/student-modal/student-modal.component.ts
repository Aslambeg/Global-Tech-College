// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student-modal',
//   templateUrl: './student-modal.component.html',
//   styleUrls: ['./student-modal.component.scss']
// })
// export class StudentModalComponent {
  

// }
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
selector: 'app-student-modal',
templateUrl: './student-modal.component.html',
})
export class StudentModalComponent {
constructor(
public dialogRef: MatDialogRef<StudentModalComponent>,
@Inject(MAT_DIALOG_DATA) public data: any
) {}

onSave(): void {
this.dialogRef.close(this.data);
}

onCancel(): void {
this.dialogRef.close();
}
}