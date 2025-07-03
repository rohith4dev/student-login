import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    StudentListComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'students-data';
  searchText= '';

  onSerach(searchText: string) {
    this.searchText = searchText;
  }
}
