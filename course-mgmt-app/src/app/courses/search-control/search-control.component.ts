import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent {

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  searchCourses(value: string) {
    this.search.emit(value);
  }


}
