import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../services/loading.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loadingSvc: LoadingService) {
  }

  loading: boolean;

  ngOnInit() {
    this.loadingSvc.loadingStatus().subscribe(loading => {
      this.loading = loading.valueOf();
    })
    ;
  }

}
