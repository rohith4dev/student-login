import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './Login.component.html',
  styleUrl: './Login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  isRegistering = false;

  constructor(private dialogRef: MatDialogRef<LoginComponent>) {}

  toggleMode() {
    this.isRegistering = !this.isRegistering;
  }

  close() {
    this.dialogRef.close();
  }

  login() {
    // handle login logic
    this.close();
  }

  register() {
    // handle register logic
    this.close();
  }
}
