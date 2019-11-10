import {TimeBasedBorderDirective} from './time-based-border.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {Component, DebugElement} from '@angular/core';

@Component({
  template: `
      <div [appTimeBasedBorder]=oldDate>Old course (default border)</div>
      <div [appTimeBasedBorder]=newDate>New course (green border)</div>
      <div [appTimeBasedBorder]=upcomingDate>Upcoming course (blue border)</div>`
})
class TestComponent {
  oldDate: Date = new Date(2018, 1, 1);
  newDate: Date = new Date(2019, 10, 8);
  upcomingDate: Date = new Date(2020, 11, 31);
}

describe('TimeBasedBorderDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let courseElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TimeBasedBorderDirective, TestComponent]
    })
      .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    courseElements = fixture.debugElement.queryAll(By.directive(TimeBasedBorderDirective));
  });

  it('creates an instance', () => {
    expect(fixture).toBeTruthy();
  });

  // color tests
  it('has three highlighted elements', () => {
    expect(courseElements.length).toBe(3);
  });

  it('is an old course', () => {
    const borderColor = courseElements[0].nativeElement.style.borderColor;
    expect(borderColor).toBe('');
  });

  ;

  it('is a new course', () => {
    const borderColor = courseElements[1].nativeElement.style.borderColor;
    expect(borderColor).toBe(`rgb(172, 211, 114)`);
  });


  it('is an upcoming course', () => {
    const borderColor = courseElements[2].nativeElement.style.borderColor;
    expect(borderColor).toBe(`rgb(83, 140, 198)`);
  });
});
