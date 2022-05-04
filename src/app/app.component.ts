import { Component } from '@angular/core';
import { Category, Group, PlaningService } from './services/planing/planing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football-club';
  collapsed = true;

  PLANING_GENERAL_TEXT = "Planing général";

  displayGroupDropDown = false;

  displayPlaningGeneral = true;

  groups: Group[] = [];

  constructor(public planing: PlaningService) {  }

  onSelectCategory(data: string) {
    this.displayGroupDropDown = true;

    if (data == this.PLANING_GENERAL_TEXT) {
      this.displayPlaningGeneral = true;
    } else {
      this.displayPlaningGeneral = false;
      this.groups = this.getListGroup(data);
    }
  }

  private getListGroup(categoryName: string): Group[] {
    let c:Category | undefined = this.planing.getCategories().find(element => element.getName() == categoryName);

    if (c) {
      return c.getGroup();
    }

    return [];
  }
}
