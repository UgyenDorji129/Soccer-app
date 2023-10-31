import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css'],
})
export class AddMatchesComponent implements OnInit {
  teamForm!: FormGroup;
  teamOneCount: number = 0;
  teamTwoCount: number = 0;
  isInvalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.teamForm = this.fb.group({
      date_time: ['', [Validators.required]],
      referee: ['', [Validators.required]],
      lines_man_1: ['', [Validators.required]],
      lines_man_2: ['', [Validators.required]],
      stadium: ['', [Validators.required]],
      team_one_name: ['', [Validators.required]],
      team_two_name: ['', [Validators.required]],
      coach_one_name: ['', [Validators.required]],
      coach_two_name: ['', [Validators.required]],
      logo_one_link: ['', [Validators.required]],
      logo_two_link: ['', [Validators.required]],
      category: ['', [Validators.required]],
      league: ['', [Validators.required]],
      team_one_player: this.fb.array([]),
      team_two_player: this.fb.array([]),
    });
  }

  getFormValues(controllerName: string) {
    return this.teamForm.get(controllerName);
  }

  get teamOnePlayerForms() {
    return this.teamForm.get('team_one_player') as FormArray;
  }

  get teamTwoPlayerForms() {
    return this.teamForm.get('team_two_player') as FormArray;
  }

  addTeamOnePlayer() {
    this.teamOneCount = this.teamOneCount + 1;
    const player = this.fb.group({
      number: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });

    (<FormArray>(<unknown>this.teamOnePlayerForms)).push(player);
  }

  deleteTeamOnePlayer(i: number) {
    this.teamOneCount = this.teamOneCount - 1;
    (<FormArray>(<unknown>this.teamOnePlayerForms)).removeAt(i);
  }
  addTeamTwoPlayer() {
    this.teamTwoCount = this.teamTwoCount + 1;
    const player = this.fb.group({
      number: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });

    (<FormArray>(<unknown>this.teamTwoPlayerForms)).push(player);
  }

  deleteTeamTwoPlayer(i: number) {
    this.teamTwoCount = this.teamTwoCount - 1;
    (<FormArray>(<unknown>this.teamTwoPlayerForms)).removeAt(i);
  }

  handleSubmit() {
    const teamOne = {
      name: this.teamForm.value.team_one_name,
      logo: this.teamForm.value.logo_one_link,
    };

    const teamTwo = {
      name: this.teamForm.value.team_two_name,
      logo: this.teamForm.value.logo_two_link,
    };

    const match = {
      category: this.teamForm.value.category,
      league: this.teamForm.value.league,
      referee: this.teamForm.value.referee,
      linesMenOne: this.teamForm.value.lines_man_1,
      linesMenTwo: this.teamForm.value.lines_man_2,
    };

    const details = {
      stadium: this.teamForm.value.stadium,
      time: this.teamForm.value.date_time,
      status: false,
      goal: '0-0',
    };

    const playerOne = this.teamForm.value.team_one_player;
    const playerTwo = this.teamForm.value.team_two_player;

    if (this.teamOneCount < 15 || this.teamTwoCount < 15) {
      this.isInvalid = true;
    } else {
      this.http
        .post(
          rootUrl + 'matches/match',
          { teamOne, teamTwo, match, details, playerOne, playerTwo },
          { withCredentials: true }
        )
        .subscribe((res: any) => {
          if (res.success === true) {
            this.router.navigate(['/admin']);
          } else {
            alert('Could not form Match');
          }
        });
    }
  }
}
