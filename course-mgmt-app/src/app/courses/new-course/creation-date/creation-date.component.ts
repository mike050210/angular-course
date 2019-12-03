import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'creation-course-date',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css']
})
export class CreationDateComponent implements OnInit {

  dateLbl: string;

  @Input()
  date: Date;

  @Output() dateChange: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit() {
    this.dateLbl = 'Creation date:';
  }


}
