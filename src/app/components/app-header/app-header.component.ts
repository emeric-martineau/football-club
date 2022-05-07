import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Group, PlaningService } from '../../services/planing/planing.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  collapsed = true;

  PLANING_GENERAL_TEXT = "Planing général";

  groups: Group[] = [];

  currentCategory: string = '';

  constructor(public planing: PlaningService, private router: Router) { }

  ngOnInit(): void {
  }

  onSelectCategory(data: string) {
    if (data == '') {
      this.router.navigate(['']);
    } else {

      this.currentCategory = data

      // TODO make it observable
      this.groups = this.getListGroup(data);
    }
  }

  onSelectGroup(data: string) {
    this.router.navigate(['category/', this.currentCategory, data]);
  }

  private getListGroup(categoryName: string): Group[] {
    let c:Category | undefined = this.planing.getCategories().find(element => element.getName() == categoryName);

    if (c) {
      return c.getGroup();      
    }

    return [];
  }
}
