import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmed_password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log("hej")
    if(this.registerForm.invalid) return;
    console.log(this.registerForm.value)
    const newUser: Omit<User, 'id'> = {
      ...this.registerForm.value
    }
    this.authService.registerUser(newUser).subscribe({
      next: () => {
        console.log('new user registered');
        this.router.navigate(['/login']).then(() => {
          alert("You have registered, you may log in now!")
          window.location.reload();
        });
      },
      error: (err: unknown) => {
        if(err instanceof Error) {
          console.error("Something went wrong", err);
          return;
        }
      }
    })

  }
}
