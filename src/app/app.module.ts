import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
    BettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
