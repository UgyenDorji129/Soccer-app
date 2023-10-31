import { HttpClient} from '@angular/common/http';
import { Component} from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private router: Router,private http: HttpClient){}

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

  signIn(formData: any){
    console.log(this.loginForm.value)
    this.http.post(rootUrl+"auth/signin",formData,{ withCredentials: true }).subscribe((res:any)=>{
      if(res.success === true){
        if(formData.isAdmin){
          this.router.navigate(["admin"]);
        }else{
          this.router.navigate(["home"]);
        }
      }else{
        this.invalidCredential = true;
      }
     });
  }
 
  async handleSubmit(){
    if(this.email?.valid && this.password?.valid){
      this.signIn(this.loginForm.value);
    }
  }
}
