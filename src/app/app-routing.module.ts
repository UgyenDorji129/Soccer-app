import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './screens/signin/signin/signin.component';
import { SignupComponent } from './screens/signup/signup/signup.component';
import { HomeComponent } from './screens/home/home/home.component';
import { FixtureComponent } from './screens/fixture/fixture/fixture.component';
import { BettingComponent } from './screens/bettings/betting/betting.component';
import { TicketComponent } from './screens/ticket/ticket/ticket.component';
import { AdminComponent } from './screens/admin/admin/admin.component';
import { AddMatchesComponent } from './screens/admin/add-matches/add-matches.component';

const routes: Routes = [
  {
    path:"",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"fixtures",
    component:FixtureComponent
  },
  {
    path:"bettings",
    component:BettingComponent
  },
  {
    path:"ticket",
    component:TicketComponent
  },{
    path:"admin",
    component:AdminComponent
  },{
    path:"add-matches",
    component:AddMatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
