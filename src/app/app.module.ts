import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralPlaningComponent } from './components/general-planing/general-planing.component';
import { MatchResultComponent } from './components//match-result/match-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralPlaningComponent,
    MatchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
