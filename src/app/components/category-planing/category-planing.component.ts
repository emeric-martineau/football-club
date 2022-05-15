import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Category, Group, Match, PlaningService } from 'src/app/services/planing/planing.service';

@Component({
  selector: 'app-category-planing',
  templateUrl: './category-planing.component.html',
  styleUrls: ['./category-planing.component.css']
})
export class CategoryPlaningComponent implements OnInit {
  // Current category name
  categoryName: string = '';
  // Current group name
  groupName: string = '';
  // The name of team
  currentTeamName: string = '';
  // Current group
  group: Group | undefined;
  // All match
  matchs: Match[] | undefined;
  // Categories
  categories: Category[] = [];

  private subParam: Subscription | undefined;
  private categoriesSubscribe: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute, public planing: PlaningService) { }

  ngOnInit(): void {
    this.subParam = this.activatedRoute.params.subscribe(params => {
      this.categoryName = params['category'];
      this.groupName = params['group'];

      this.group = this.findGroup()
    });

    this.categoriesSubscribe = this.planing.getCategories().subscribe(c => {
      this.categories = c;

      this.group = this.findGroup();      
    })
  }

  ngOnDestroy() {
    this.subParam?.unsubscribe();
    this.categoriesSubscribe?.unsubscribe();
  }

  onSelectGroup(teamName: string) {
    if (this.group) {
      this.matchs =  this.group.getMatchs().filter((element: Match) => 
        element.getTeams()[0].getName() == teamName || element.getTeams()[1].getName() == teamName);

      this.currentTeamName = teamName;
    }
  }

  private findGroup(): Group | undefined {
    let groups = this.getListGroup(this.categoryName);

    return groups.find(element => element.getName() == this.groupName)
  }

  private getListGroup(categoryName: string): Group[] {
    let c:Category | undefined = this.categories.find(element => element.getName() == categoryName);

    if (c) {
      return c.getGroup();      
    }

    return [];
  }
}
