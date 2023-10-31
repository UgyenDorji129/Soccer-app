import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  goalForm!: FormGroup;
  data: any;
  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.goalForm = this.formBuilder.group({
      first_goal: ['', [Validators.required, Validators.min(0)]],
      second_goal: ['', [Validators.required, Validators.min(0)]],
      amount: ['', [Validators.required, Validators.min(100)]],
    });
  }

  get firstGoal() {
    return this.goalForm.get('first_goal');
  }

  get secondGoal() {
    return this.goalForm.get('second_goal');
  }

  get amounts() {
    return this.goalForm.get('amount');
  }

  makeBet() {
    this.http
      .post(rootUrl + 'matches/bettings', {
        matchId: this.data.matchId,
        amount: this.amounts?.value,
        prediction: this.firstGoal?.value + '-' + this.secondGoal?.value,
      })
      .subscribe((res: any) => {
        this.router.navigate(['/home']);
        this.modalRef.close();
      });
  }
}
