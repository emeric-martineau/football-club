import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/services/planing/planing.service';

@Component({
  selector: 'match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {
  @Input() matchs: Team[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
