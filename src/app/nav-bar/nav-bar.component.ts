import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent} from '../Login/Login.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  searchTerm = '';

  @Output() searchChanged = new EventEmitter<string>();
  
  constructor(private dialog: MatDialog) {}
  onSearchChange() {
    this.searchChanged.emit(this.searchTerm.trim());
  }
  redirectToCollege() {
    window.open('https://gcet.edu.in/', '_blank');
  }
 openLoginModal() {
    this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }

}
