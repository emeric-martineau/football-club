import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPlaningComponent } from './components/category-planing/category-planing.component';
import { FinalComponent } from './components/final/final.component';
import { FinalRanksComponent } from './components/final-ranks/final-ranks.component';

import { GeneralPlaningComponent } from './components/general-planing/general-planing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'category/:category/:group',
    component: CategoryPlaningComponent
  },  
  {
    path: 'final/ranks/:category',
    component: FinalRanksComponent
  },  
  {
    path: 'final/:category',
    component: FinalComponent
  },  
  {
    path: '',
    component: GeneralPlaningComponent
  },  
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
