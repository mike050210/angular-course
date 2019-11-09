import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent {

  searchText = '';

  searchCourse() {
    console.log(this.searchText);
  }


}
