import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
  loginForm!: FormGroup;
  invalidCredential :boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["",[
        Validators.required,
        Validators.email
      ]],
      password: ["",[
        Validators.required,
        Validators.minLength(8)
      ]],
      isAdmin:[false,[
        Validators.required
      ]]
    })
  }

  get email(){
    return this.loginForm.get("email");
  }

  get password(){
    return this.loginForm.get("password")
  }
 
  handleSubmit(){
    if(this.email?.valid && this.password?.valid){
      this.http.post(rootUrl+"auth/signin",this.loginForm.value,{ withCredentials: true }).subscribe((res:any)=>{
        if(res.success === true){
          this.router.navigate(["home"])
        }
        else{
          this.invalidCredential = true
        }
       });
    }
  }
}
