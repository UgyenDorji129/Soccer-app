import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
  teamForm!: FormGroup; 

constructor(private fb: FormBuilder, private http: HttpClient) { }
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
      category:["",[
        Validators.required
      ]],
      league:["",[
        Validators.required
      ]]
      ,
      team_one_player:this.fb.array([]),
      team_two_player:this.fb.array([])
    });
  }

  get teamOnePlayerForms() {
    return this.teamForm.get('team_one_player') as FormArray
  }

  get teamTwoPlayerForms() {
    return this.teamForm.get('team_two_player') as FormArray
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
      number: ([]),
      name:([])
    });
  
    (<FormArray><unknown>this.teamTwoPlayerForms).push(player);
  }
  
  deleteTeamTwoPlayer(i: number) {
    (<FormArray><unknown>this.teamTwoPlayerForms).removeAt(i)
  }

  handleSubmit(){
    const teamOne = {
      "name":this.teamForm.value.team_one_name,
      "logo": this.teamForm.value.logo_one_link
  };

    const teamTwo = {
      "name":this.teamForm.value.team_two_name,
      "logo": this.teamForm.value.logo_two_link
  };
  
  const match = {
      "category":this.teamForm.value.category,
      "league":this.teamForm.value.league,
      "referee":this.teamForm.value.referee,
      "linesMenOne":this.teamForm.value.lines_man_1,
      "linesMenTwo":this.teamForm.value.lines_man_2
  };

  const details = {
      "stadium": this.teamForm.value.stadium,
      "time": this.teamForm.value.date_time,
      "status":false,
      "goal":"0-0"
  };

  const playerOne = this.teamForm.value.team_one_player;
  const playerTwo = this.teamForm.value.team_two_player;

  this.http.post(rootUrl+"matches/match",{teamOne, teamTwo, match, details, playerOne, playerTwo},{ withCredentials: true }).subscribe((res:any)=>{
    if(res.success === true){
      console.log("Done",res)
    }else{
      console.log("Not Done", res)
    }
   });

  }

}
