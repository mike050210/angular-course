import {Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  paths = <Path[]>[{name: 'Courses'}];

}
