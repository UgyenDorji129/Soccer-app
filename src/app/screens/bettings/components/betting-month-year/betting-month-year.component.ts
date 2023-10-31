import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-betting-month-year',
  templateUrl: './betting-month-year.component.html',
  styleUrls: ['./betting-month-year.component.css'],
})
export class BettingMonthYearComponent {
  @Input() data: any;
}
