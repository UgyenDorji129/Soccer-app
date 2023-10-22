import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:["",[Validators.required]],
      email: ["",[
        Validators.required,
        Validators.email
      ]],
      password: ["",[
        Validators.required,
        Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,16}$")
      ]]
    })
  }

  get email(){
    return this.signupForm.get("email");
  }

  get password(){
    return this.signupForm.get("password")
  }

  get name(){
    return this.signupForm.get("name")
  }

  handleSubmit(){
    if(this.email?.valid && this.password?.valid && this.name){
      console.log("Logged In: ", this.email, this.name, this.password)
    }
    else{
      alert("Please enter a valid credentials")
    }
  }
}
