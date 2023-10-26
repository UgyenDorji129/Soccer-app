import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
  teamForm!: FormGroup; 

constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

    this.teamForm = this.fb.group({
      date_time: ["", [
        Validators.required
      ]],
      referee:["",[
        Validators.required
      ]],
      lines_man_1:["",[
        Validators.required
      ]],
      lines_man_2:["",[
        Validators.required
      ]],
      stadium:["",[
        Validators.required
      ]],
      team_one_name:["",[
        Validators.required
      ]],
      team_two_name:["",[
        Validators.required
      ]],
      coach_one_name:["",[
        Validators.required
      ]],
      coach_two_name:["",[
        Validators.required
      ]],
      logo_one_link:["",[
        Validators.required
      ]],
      logo_two_link:["",[
        Validators.required
      ]],
      player_one:this.fb.array([]),
      player_two:this.fb.array([])
    });
  }

  get teamOnePlayerForms() {
    return this.teamForm.get('player_one') as FormArray
  }

  get teamTwoPlayerForms() {
    return this.teamForm.get('player_two') as FormArray
  }
  
  addTeamOnePlayer() {
    const player = this.fb.group({ 
      number: [],
      name:[]
    });
  
    (<FormArray><unknown>this.teamOnePlayerForms).push(player);
  }
  
  deleteTeamOnePlayer(i: number) {
    (<FormArray><unknown>this.teamOnePlayerForms).removeAt(i)
  }
  addTeamTwoPlayer() {
    const player = this.fb.group({ 
      number: [],
      name:[]
    });
  
    (<FormArray><unknown>this.teamTwoPlayerForms).push(player);
  }
  
  deleteTeamTwoPlayer(i: number) {
    (<FormArray><unknown>this.teamTwoPlayerForms).removeAt(i)
  }

}
