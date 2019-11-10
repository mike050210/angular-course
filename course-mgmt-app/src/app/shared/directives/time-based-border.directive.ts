import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTimeBasedBorder]'
})
export class TimeBasedBorderDirective implements OnInit {

  @Input('appTimeBasedBorder') creationDate: Date;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const currentDate = new Date();
    if (this.creationDate < currentDate
      && this.creationDate >= new Date(currentDate.getTime() - (1000 * 60 * 60 * 24 * 14))) {
      this.changeBorderColor('#acd372');
    } else if (this.creationDate > currentDate) {
      this.changeBorderColor('#538cc6');
    }


  }

  changeBorderColor(color: String) {
    this.elementRef.nativeElement.style.borderColor = color;
    this.elementRef.nativeElement.style.borderWidth = '2px';
  }

}
