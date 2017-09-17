import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SunburstComponent } from './sunburst/sunburst.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SunburstComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
