import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-betting-match-detail',
  templateUrl: './betting-match-detail.component.html',
  styleUrls: ['./betting-match-detail.component.css']
})
export class BettingMatchDetailComponent implements OnInit{
  goalForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){}
  ngOnInit(): void {
    this.goalForm = this.formBuilder.group({
      first_goal: ["",[
        Validators.required,
        Validators.min(0)
      ]],
      second_goal: ["",[
        Validators.required,
        Validators.min(0)
      ]]
    })
  }

  get email(){
    return this.goalForm.get("email");
  }

  get password(){
    return this.goalForm.get("password")
  }
  openModal(){
    const modalDiv = document.getElementById("ticket-Modal");
    if(modalDiv != null){
      modalDiv.style.display = "block"
    }
  }
  closeModal(){
    const modalDiv = document.getElementById("ticket-Modal");
    if(modalDiv != null){
      modalDiv.style.display = "none"
    }
  }
}
