import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-month-year',
  templateUrl: './ticket-month-year.component.html',
  styleUrls: ['./ticket-month-year.component.css'],
})
export class TicketMonthYearComponent {
  @Input() data: any;
}
