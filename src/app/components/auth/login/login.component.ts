import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseInterface } from 'src/app/types/auth.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isSubmitting = true;
      this.authService
        .login(this.form.value)
        .subscribe({
          next: (res: LoginResponseInterface) => {
            console.log(res);

            // save username, accesstoken and refresh token into localStorage
            this.authService.addAccessToken(res.token);
            // this.authService.addRefreshToken(res.refreshToken);
            this.authService.addUsername(res.email);
            // this.status.statusCode=res.statusCode;
            // this.status.message=res.message;
            // if (res.statusCode == 1) {
            this.router.navigate(['dashboard']);
            // }
          },
          error: (err) => {
            console.log(err);
            // this.status.statusCode=0;
            // this.status.message="some error on server side";
          },
        })
        .add(() => {
          this.isSubmitting = false;
        });
    }
  }
}
