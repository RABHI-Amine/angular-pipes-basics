import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertMilesToKmsPipe } from './convert-miles-to-kms.pipe';
import { ConvertMilesPipe } from './convert-miles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMilesToKmsPipe,
    ConvertMilesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
