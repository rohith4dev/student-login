import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentService } from '../../models/service/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit, OnChanges {
  students: Student[] = [];             // All students from service
  filteredStudents: Student[] = [];  
  isDarkTheme: boolean = true;        
  @Input() filter = '';

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.applyFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter']) {
      this.applyFilter();
    }
  }

  applyFilter() {
    const term = this.filter.toLowerCase();
    this.filteredStudents = this.students.filter(student =>
      student.name.toLowerCase().includes(term) ||
      student.rollNumber.toLowerCase().includes(term)
    );
  }

  openDetails(student: Student) {
    this.dialog.open(StudentDetailsComponent, {
      data: student,
      width: '600px',
    });
  }

  get average(): number {
    if (!this.filteredStudents.length) return 0;

    const total = this.filteredStudents.reduce((sum, student) => {
      const studentTotal = student.subjects.reduce((s, sub) => s + sub.marks, 0);
      return sum + (studentTotal / student.subjects.length);
    }, 0);
    return +(total / this.filteredStudents.length).toFixed(1);
  }
}
