import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/screens/bettings/components/modal/modal.component';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})
export class TicketModalComponent {
  data: any;
  constructor(public modalRef: MdbModalRef<TicketModalComponent>, private router: Router) {}
}
