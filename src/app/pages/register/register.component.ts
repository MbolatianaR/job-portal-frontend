import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone : false 
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
      // Appelle le service d'inscription ici
      console.log('Formulaire valide, données:', this.registerForm.value);
      // Reset erreur
      this.errorMessage = '';
      // Par exemple, envoyer les données au backend...
    } else {
      this.errorMessage = 'Merci de remplir correctement le formulaire.';
    }
  }

    onCancel() {
    this.router.navigate(['/']); // Redirige vers la page d'accueil, change la route si besoin
  }
}
