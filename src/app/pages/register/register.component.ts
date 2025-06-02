import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone : false
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  passwordsMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const { firstName, lastName, email, phone, password } = this.registerForm.value;

    this.authService.register({ firstName, lastName, email, phone, password }).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de l\'inscription';
      }
    });
  }
}
