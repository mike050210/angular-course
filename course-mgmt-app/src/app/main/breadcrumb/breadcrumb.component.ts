import { Component, OnInit, Input } from '@angular/core';
import { Path } from 'src/app/models/paths.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() paths: Path[];

  constructor() { }

  ngOnInit() {
  }

}
