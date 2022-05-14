import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Group, Match, PlaningService } from 'src/app/services/planing/planing.service';

@Component({
  selector: 'app-category-planing',
  templateUrl: './category-planing.component.html',
  styleUrls: ['./category-planing.component.css']
})
export class CategoryPlaningComponent implements OnInit {

  categoryName: string = '';
  currentTeamName: string = '';
  group: Group | undefined;
  matchs: Match[] | undefined;

  private subParam: any;

  constructor(private activatedRoute: ActivatedRoute, public planing: PlaningService) { }

  ngOnInit(): void {
    this.subParam = this.activatedRoute.params.subscribe(params => {
      this.categoryName = params['category'];
      let groupName = params['group'];

      // TODO make it observable
      let groups = this.getListGroup(this.categoryName);

      this.group = groups.find(element => element.getName() == groupName)
   });
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
  }

  onSelectGroup(teamName: string) {
    if (this.group) {
      this.matchs =  this.group.getMatchs().filter((element: Match) => 
        element.getTeams()[0].getName() == teamName || element.getTeams()[1].getName() == teamName);

      this.currentTeamName = teamName;
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
