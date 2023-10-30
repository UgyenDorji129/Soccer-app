import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:["",[Validators.required]],
      email: ["",[
        Validators.required,
        Validators.email
      ]],
      password: ["",[
        Validators.required,
        Validators.minLength(8)
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
      if(this.email?.valid && this.password?.valid){
        this.http.post(rootUrl+"auth/signup",this.signupForm.value).subscribe((res)=>{
         console.log("data: ",JSON.stringify(res))
        })
      this.router.navigate(["home"])
    }
    else{
      alert("Please enter a valid credentials")
    }
  }
}
}
