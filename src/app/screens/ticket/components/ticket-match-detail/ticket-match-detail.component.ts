import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticket-match-detail',
  templateUrl: './ticket-match-detail.component.html',
  styleUrls: ['./ticket-match-detail.component.css']
})
export class TicketMatchDetailComponent{
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
