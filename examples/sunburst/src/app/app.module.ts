import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkSunburstComponent } from './park-sunburst/park-sunburst.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ParksService } from './shared/parks.service';

@NgModule({
  declarations: [
    AppComponent,
    ParkSunburstComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ParksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
