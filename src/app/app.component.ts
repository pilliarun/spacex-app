import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) { }
  title = 'spacex-app';
  public data;
  public availableYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2104, 2015, 2016, 2017, 2018, 2019, 2020];

  ngOnInit() {
    const obj = {};
    this.appService.getDashboardData(obj).subscribe(res => {
      this.data = res;
    });
  }


  filterDataByYear(year) {
    const obj = { year };
    this.appService.getDashboardData(obj).subscribe(res => {
      this.data = res;
    });
  }


  filterDataByLaunch(launch) {
    const obj = { launch };
    this.appService.getDashboardData(obj).subscribe(res => {
      this.data = res;
    });
  }

  filterDataByLanding(landing) {
    const obj = { landing };
    this.appService.getDashboardData(obj).subscribe(res => {
      this.data = res;
    });
  }


}
