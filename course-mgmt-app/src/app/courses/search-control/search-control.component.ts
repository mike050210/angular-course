import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent {

  searchText = '';

  @Output()
  search = new EventEmitter<string>();

  searchCourses() {
    this.search.emit(this.searchText);
  }


}
