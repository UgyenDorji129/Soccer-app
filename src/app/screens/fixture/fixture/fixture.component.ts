import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { rootUrl } from 'src/app/constants';
import { Match } from '../model/match.dto';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent {
  data!: any;
  isLoading:boolean = false;
  constructor(private http: HttpClient){}

  groupByYearMonth(matches: Match[]) {
    const groupedMatches: { [key: string]: Match[] } = {};
  
    for (const match of matches) {
      const year = match.year_month.year;
      const month = match.year_month.month;
  
      const key = `${year}-${month}`;
      if (!groupedMatches[key]) {
        groupedMatches[key] = [];
      }
  
      groupedMatches[key].push(match);
    }
  
    return Object.values(groupedMatches);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get(rootUrl+"matches/allmatches").subscribe((res:any)=>{
      if(res.success === true){
        this.data = this.groupByYearMonth(res.data)
        this.isLoading = false;
      }
    });

  }

  returnObject(val:any){
    return Object.keys(val);
  }
}
