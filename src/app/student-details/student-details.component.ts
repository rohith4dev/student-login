import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentDetailsComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public student: Student
  ) {
    if (!this.student) {
      this.student = {
        id: '',
        name: '',
        rollNumber: '',
        stream: '',
        photoUrl: '',
        subjects: []
      };
    }
  }

  get average(): number {
    if (!this.student.subjects.length) return 0;
    const total = this.student.subjects.reduce((sum, s) => sum + s.marks, 0);
    return +(total / this.student.subjects.length).toFixed(1);
  }

  close() {
    this.dialogRef.close();
  }
}
