import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-month-year',
  templateUrl: './month-year.component.html',
  styleUrls: ['./month-year.component.css'],
})
export class MonthYearComponent {
  @Input() data: any;
}
