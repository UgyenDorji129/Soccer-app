import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-betting-match-detail',
  templateUrl: './betting-match-detail.component.html',
  styleUrls: ['./betting-match-detail.component.css'],
})
export class BettingMatchDetailComponent {
  @Input() data: any;
  @Input()
  index!: any;

  isBetted: boolean = false;
  goal!: string;

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private modalService: MdbModalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .post(rootUrl + 'matches/isBetted', { matchId: this.data.matchId },{ withCredentials: true })
      .subscribe((res: any) => {
        if (res != null && res.success === true) {
          this.isBetted = true;
          this.goal = res.data;
          console.log(res)
        }
      });
  }
  openModal() {
    console.log(this.data.time);
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { data: this.data },
    });
  }
}
