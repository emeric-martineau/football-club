import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category, Match, PlaningService } from 'src/app/services/planing/planing.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  matchs: Match[] = []
  categoryName = '';

  // Categories
  categories: Category[] = [];
  
  private categoriesSubscribe: Subscription | undefined;

  constructor(public planing: PlaningService) {  }

  ngOnInit(): void {
    let result = this.planing.getCategories();

    this.categories = result.data;

    this.onSelectCategory(this.categoryName);  

    this.categoriesSubscribe = result.observable.subscribe(c => {
      this.categories = c;

      this.onSelectCategory(this.categoryName);  
    })
  }

  ngOnDestroy() {
    this.categoriesSubscribe?.unsubscribe();
  }

  onSelectCategory(category: string) {
    let m;

    if (category == '') {
      m = this.categories[0].getFinal();
      this.categoryName = this.categories[0].getName();
    } else {
      m = this.categories.find(element => element.getName() == category)?.getFinal();
      this.categoryName = category;
    }

    if (m) {
      this.matchs = m;
    } else {
      this.matchs = [];
    }
  }
}
