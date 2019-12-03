import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  durationLbl: string;

  @Input()
  duration: number;

  @Output()
  durationChange: EventEmitter<String> = new EventEmitter<String>();


  constructor() {
  }

  ngOnInit() {
    this.durationLbl = 'Duration: ';
  }

}
