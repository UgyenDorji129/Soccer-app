import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  invalidCredential: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get name() {
    return this.signupForm.get('name');
  }

  signIn(formData: any) {
    this.http
      .post(rootUrl + 'auth/signin', formData, { withCredentials: true })
      .subscribe((res: any) => {
        if (res.success === true) {
          this.router.navigate(['home']);
        } else {
          this.invalidCredential = true;
        }
      });
  }
  handleSubmit() {
    if (this.email?.valid && this.password?.valid && this.name) {
      if (this.email?.valid && this.password?.valid) {
        this.http
          .post(rootUrl + 'auth/signup', this.signupForm.value,{ withCredentials: true })
          .subscribe((res: any) => {
            console.log(this.signupForm.value);
            if (res.success == true) {
              this.router.navigate(["/signin"])
            } else {
              this.invalidCredential = true;
            }
          });
      }
    }
  }
}
