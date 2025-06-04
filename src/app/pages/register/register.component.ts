import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // bien vérifier le chemin

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone : false 
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService // Injection du service ici
  ) {}

  ngOnInit(): void {
  this.registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    password: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    confirmPassword: ['', Validators.required],
    role: ['', Validators.required],
  }, { validators: this.passwordsMatchValidator });

  }

  // Validator personnalisé pour vérifier que password === confirmPassword
  passwordsMatchValidator(group: AbstractControl): {[key: string]: boolean} | null {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    if (pass && confirmPass && pass !== confirmPass) {
      return { passwordMismatch: true };
    }
    return null;
  }

onSubmit() {
  if (this.registerForm.valid) {
    // Préparation des données à envoyer au backend
    const formValue = this.registerForm.value;

    // Assure-toi que le phone n’est pas vide, sinon donne une valeur par défaut
    const phone = formValue.phone && formValue.phone.trim() !== '' ? formValue.phone : '0000000000';

    // Met le rôle en majuscules (pour correspondre à l’enum backend)
    const role = formValue.role.toUpperCase();

    // Préparer l’objet à envoyer
    const userToRegister = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      phone: phone,
      password: formValue.password,
      role: role
    };

    this.authService.register(userToRegister).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l’inscription';
      }
    });
  }
}


  onCancel() {
    this.router.navigate(['/']); // Redirige vers la page d'accueil, change la route si besoin
  }
}
