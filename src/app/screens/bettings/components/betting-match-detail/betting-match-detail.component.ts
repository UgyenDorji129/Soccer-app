import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-betting-match-detail',
  templateUrl: './betting-match-detail.component.html',
  styleUrls: ['./betting-match-detail.component.css']
})
export class BettingMatchDetailComponent {
 
  @Input() data: any;
  @Input()
  index!: any;

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    console.log(this.data.time)
    this.modalRef = this.modalService.open(ModalComponent,{
      data: { data: this.data },
    })
  }
  


 
}
