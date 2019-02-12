import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataGeneratorService } from './data-generator.service';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule
  ],
  providers: [DataGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
