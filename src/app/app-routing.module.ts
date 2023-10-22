import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './screens/signin/signin/signin.component';
import { SignupComponent } from './screens/signup/signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
