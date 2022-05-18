import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/services/planing/planing.service';
import Utils from 'src/app/utils';

@Component({
  selector: 'match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent {
  @Input() match: Match | undefined = undefined;
  
  constructor() { }

  getClassCssName(categoryName: string | undefined): string {
    return Utils.classCssName(categoryName);
  }
}
