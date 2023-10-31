import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/screens/bettings/components/modal/modal.component';
import { TicketModalComponent } from '../ticket-modal/ticket-modal.component';
import { HttpClient } from '@angular/common/http';
import { rootUrl } from 'src/app/constants';

@Component({
  selector: 'app-ticket-match-detail',
  templateUrl: './ticket-match-detail.component.html',
  styleUrls: ['./ticket-match-detail.component.css']
})
export class TicketMatchDetailComponent{
  @Input() data: any;
  @Input()
  index!: any;
 

  modalRef: MdbModalRef<TicketModalComponent> | null = null;

  constructor(private modalService: MdbModalService, private http: HttpClient) {}

  

  openModal() {
    console.log(this.data.time)
    this.modalRef = this.modalService.open(TicketModalComponent,{
      data: { data: this.data },
    })
  }
}
