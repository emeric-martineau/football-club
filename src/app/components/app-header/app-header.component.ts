import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Category, Group, PlaningService } from '../../services/planing/planing.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  GENERAL_PLANING = 'PG';
  FINAL = 'PF';

  collapsed = true;

  // Current group of selectedCatetoryName
  groups: Group[] = [];
  // Selected category name
  selectedCategoryName: string = '';
  // Selected group name of category name
  selectedGroupName: string = '';
  // Categories
  categories: Category[] = [];
  
  private categoriesSubscribe: Subscription | undefined;

  constructor(private planing: PlaningService, private router: Router) { }

  ngOnInit(): void {
    let result = this.planing.getCategories();

    this.categories = result.data;

    this.groups = this.getListGroup(this.selectedCategoryName); 

    this.categoriesSubscribe = result.observable.subscribe(c => {
      this.categories = c;

      this.groups = this.getListGroup(this.selectedCategoryName);    
    })
  }

  ngOnDestroy() {
    this.categoriesSubscribe?.unsubscribe();
  }

  onSelectCategory(categoryName: string) {
    switch (categoryName) {
      case this.GENERAL_PLANING:
        this.router.navigate(['']);
        break;
      case this.FINAL:
        this.router.navigate(['final']);
        break;
      default:
        this.selectedCategoryName = categoryName

        this.groups = this.getListGroup(categoryName);
    }
  }

  onSelectGroup(groupName: string) {
    this.router.navigate(['category/', this.selectedCategoryName, groupName]);
  }

  private getListGroup(categoryName: string): Group[] {
    let c:Category | undefined = this.categories.find(element => element.getName() == categoryName);

    if (c) {
      return c.getGroup();      
    }

    return [];
  }
}
