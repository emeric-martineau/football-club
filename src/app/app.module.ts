import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralPlaningComponent } from './components/general-planing/general-planing.component';
import { MatchResultComponent } from './components//match-result/match-result.component';
import { CategoryPlaningComponent } from './components/category-planing/category-planing.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralPlaningComponent,
    MatchResultComponent,
    CategoryPlaningComponent,
    AppHeaderComponent,
    PageNotFoundComponent,
    FinalComponent,
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
