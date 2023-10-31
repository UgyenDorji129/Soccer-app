import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './screens/signin/signin/signin.component';
import { SignupComponent } from './screens/signup/signup/signup.component';
import { HomeComponent } from './screens/home/home/home.component';
import { NavbarComponent } from './screens/navbar/navbar/navbar.component';
import { FooterComponent } from './screens/footer/footer.component';
import { FixtureComponent } from './screens/fixture/fixture/fixture.component';
import { CategoryTitleComponent } from './screens/home/components/category-title/category-title.component';
import { MatchPlayedComponent } from './screens/home/components/match-played/match-played.component';
import { UpcomingMatchComponent } from './screens/home/components/upcoming-match/upcoming-match.component';
import { MiniFixtureComponent } from './screens/home/components/mini-fixture/mini-fixture.component';
import { MonthYearComponent } from './screens/fixture/component/month-year/month-year.component';
import { MatchDetailsComponent } from './screens/fixture/component/match-details/match-details.component';
import { BettingComponent } from './screens/bettings/betting/betting.component';
import { BettingMatchDetailComponent } from './screens/bettings/components/betting-match-detail/betting-match-detail.component';
import { BettingMonthYearComponent } from './screens/bettings/components/betting-month-year/betting-month-year.component';
import { TicketComponent } from './screens/ticket/ticket/ticket.component';
import { TicketMatchDetailComponent } from './screens/ticket/components/ticket-match-detail/ticket-match-detail.component';
import { TicketMonthYearComponent } from './screens/ticket/components/ticket-month-year/ticket-month-year.component';
import { AdminComponent } from './screens/admin/admin/admin.component';
import { AdminNavComponent } from './screens/admin/admin-nav/admin-nav.component';
import { AllMatchesComponent } from './screens/admin/all-matches/all-matches.component';
import { CurrentMatchesComponent } from './screens/admin/current-matches/current-matches.component';
import { AddMatchesComponent } from './screens/admin/add-matches/add-matches.component';
import { CookieService } from 'ngx-cookie-service';
import { ModalComponent } from './screens/bettings/components/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FixtureComponent,
    CategoryTitleComponent,
    MatchPlayedComponent,
    UpcomingMatchComponent,
    MiniFixtureComponent,
    MonthYearComponent,
    MatchDetailsComponent,
    BettingComponent,
    BettingMatchDetailComponent,
    BettingMonthYearComponent,
    TicketComponent,
    TicketMatchDetailComponent,
    TicketMonthYearComponent,
    AdminComponent,
    AdminNavComponent,
    AllMatchesComponent,
    CurrentMatchesComponent,
    AddMatchesComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MdbModalModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
