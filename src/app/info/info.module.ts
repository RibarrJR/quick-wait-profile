import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [InfoComponent],
  imports: [BrowserModule, CommonModule],
  exports: [InfoComponent],
  bootstrap: [InfoComponent],
})
export class InfoModule {}
