import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { TimeConverterPipe } from './pipes/time-converter.pipe';



@NgModule({
  declarations: [LabelComponent, TimeConverterPipe],
  imports: [
    CommonModule
  ],
  exports: [LabelComponent, TimeConverterPipe]
})
export class SharedModule { }
