import { LoadingService } from './../services/loading.service';
import { LoadingComponent } from './loading/loading.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  isLoading: boolean;

  constructor(private httpClient: HttpClient,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret
      console.log(ret)
    });

    this.loadingService.isBooleanObservable.subscribe(
      (res) => {
        this.isLoading = res
      }
    )
  }

}
