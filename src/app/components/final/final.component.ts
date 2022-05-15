import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category, Match, PlaningService } from 'src/app/services/planing/planing.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  matchs: Match[] = []
  // Category name
  categoryName = '';

  // Categories
  categories: Category[] = [];
  
  private subParam: Subscription | undefined;
  private categoriesSubscribe: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute, private planing: PlaningService) {  }

  ngOnInit(): void {
    this.subParam = this.activatedRoute.params.subscribe(params => {
      this.categoryName = params['category'];

      this.findSelectCategory(this.categoryName)      
    });

    let result = this.planing.getCategories();

    this.loadDataFunc(result.data, this.categoryName);

    this.categoriesSubscribe = result.observable.subscribe(c => this.loadDataFunc(c, this.categoryName));
  }

  ngOnDestroy() {
    this.categoriesSubscribe?.unsubscribe();
  }

  private findSelectCategory(category: string) {
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

  private loadDataFunc(c: Category[], categoryName: string) {
    this.categories = c;

    this.findSelectCategory(categoryName)   
  }
}
