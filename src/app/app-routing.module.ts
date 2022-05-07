import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPlaningComponent } from './components/category-planing/category-planing.component';
import { GeneralPlaningComponent } from './components/general-planing/general-planing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'category/:category/:group',
    component: CategoryPlaningComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
