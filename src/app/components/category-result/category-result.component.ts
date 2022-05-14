import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/services/planing/planing.service';
import Utils from 'src/app/utils';

@Component({
  selector: 'category-result',
  templateUrl: './category-result.component.html',
  styleUrls: ['./category-result.component.css']
})
export class CategoryResultComponent implements OnInit {
  @Input() matchs: Match[] | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  formatNumber(num: number) {
    return Utils.formatNumber(num);
  }
}
