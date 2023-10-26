import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["",[
        Validators.required,
        Validators.email
      ]],
      password: ["",[
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$')
      ]]
    })
  }

  get email(){
    return this.loginForm.get("first_goal");
  }

  get password(){
    return this.loginForm.get("second_goal")
  }
  handleSubmit(){
    if(this.email?.valid && this.password?.valid){
      console.log("Logged In");
      this.router.navigate(["home"])
    }
    else{
      alert("Please enter a valid credentials")
    }
  }
}
