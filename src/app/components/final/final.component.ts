import { Component, OnInit } from '@angular/core';
import { Match, PlaningService } from 'src/app/services/planing/planing.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  matchs: Match[] = []
  categoryName = '';

  constructor(public planing: PlaningService) {  }

  ngOnInit(): void {
    this.onSelectCategory('');
  }

  onSelectCategory(category: string) {
    let m;

    if (category == '') {
      m = this.planing.getCategories()[0].getFinal();
      this.categoryName = this.planing.getCategories()[0].getName();
    } else {
      m = this.planing.getCategories().find(element => element.getName() == category)?.getFinal();
      this.categoryName = category;
    }

    if (m) {
      this.matchs = m;
    } else {
      this.matchs = [];
    }
  }
}
