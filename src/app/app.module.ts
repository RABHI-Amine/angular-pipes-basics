import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertMilesToKmsPipe } from './convert-miles-to-kms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMilesToKmsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
