import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  groups: Group[] = [];

  selectedCategoryName: string = '';
  selectedGroupName: string = '';

  constructor(public planing: PlaningService, private router: Router) { }

  ngOnInit(): void {
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

        // TODO make it observable
        this.groups = this.getListGroup(categoryName);
    }
  }

  onSelectGroup(groupName: string) {
    this.router.navigate(['category/', this.selectedCategoryName, groupName]);
  }

  private getListGroup(categoryName: string): Group[] {
    let c:Category | undefined = this.planing.getCategories().find(element => element.getName() == categoryName);

    if (c) {
      return c.getGroup();      
    }

    return [];
  }
}
