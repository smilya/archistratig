import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EventsContentComponent } from './events-content/events-content.component';
import { ColorsContentComponent } from './colors-content/colors-content.component';
import { ChaptersContentComponent } from './chapters-content/chapters-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    EventsContentComponent,
    ColorsContentComponent,
    ChaptersContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
