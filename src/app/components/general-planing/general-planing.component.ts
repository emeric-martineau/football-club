import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaningService, Match } from 'src/app/services/planing/planing.service';
import Utils from 'src/app/utils';

// TODO use https://bootstrap-table.com/docs/getting-started/introduction/ ?

export class Ground {
  constructor(private name: string, private matchs: Match[]) {}

  getName(): string {
    return this.name;
  }

  getMatchs(): Match[] {
    return this.matchs;
  }
}

@Component({
  selector: 'app-general-planing',
  templateUrl: './general-planing.component.html',
  styleUrls: ['./general-planing.component.css']
})
export class GeneralPlaningComponent implements OnInit {
  // All available hours
  private hours: number[] = [];
  
  // All Ground order by name
  private grounds: Ground[] = [];

  private matchsSubscribe: Subscription | undefined;

  constructor(private planing: PlaningService) {  }

  ngOnInit(): void {
    let result = this.planing.getMatchs();  

    this.loadDataFunc(result.data);

    this.matchsSubscribe = result.observable.subscribe(m => this.loadDataFunc(m))
  }

  ngOnDestroy() {
    this.matchsSubscribe?.unsubscribe();
  }

  getGrounds(): Ground[] {
    return this.grounds;
  }

  getHours(): number[] {
    return this.hours;
  }

  getMatchOfHours(groundname: string, hour: number): Match {
    const currentGround = this.grounds.find(element => element.getName() == groundname);

    if (currentGround) {
      const foundMatch = currentGround.getMatchs().find(element => element.getHour() == hour);

      if (foundMatch) {
        return foundMatch;
      }
    }

    return new Match(hour, false, -1, '', '', [], '');
  }

  formatNumber(num: number) {
    return Utils.formatNumber(num);
  }

  private generateGroundsList(listOfMatchs: Map<string, Match[]>) {
    let keys: string[] = [];
    this.grounds = [];

    for (let key of listOfMatchs.keys()) {
      keys.push(key);
    }

    for(let k of keys.sort()) {
      if (listOfMatchs.get(k)) {
        this.grounds.push(
          new Ground(k, listOfMatchs.get(k)!)
        );   
      }
    }
  }

  private generateHoursList() {
    let h: number[] = [];
    this.hours = [];

    // Put all hours in list
    this.grounds.forEach(g => 
      g.getMatchs().forEach(m => h.push(m.getHour()))
    );

    let allHours = [...new Set(h)];

    this.hours = allHours.sort((a, b) => a - b);
  }

  private loadDataFunc(data: Map<string, Match[]> | undefined) {
    if (data) {
      // First generate a list for each ground with list of match
      this.generateGroundsList(data);

        // Generate list of available hours
      this.generateHoursList();
    }
  }
}
