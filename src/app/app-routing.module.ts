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
import { CookieService } from 'ngx-cookie-service';
import { GuestGuard } from './guard/guest.guard';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fixtures',
    component: FixtureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bettings',
    component: BettingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tickets',
    component: TicketComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'add-matches',
    component: AddMatchesComponent,
    canActivate: [AdminGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CookieService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
