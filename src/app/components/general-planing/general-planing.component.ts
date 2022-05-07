import { Component, OnInit } from '@angular/core';
import { PlaningService, Match } from 'src/app/services/planing/planing.service';

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

  private generateGroundsList() {
    let listOfMatchs = this.planing.getMatchs();
    let keys: string[] = [];

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

    // Put all hours in list
    this.grounds.forEach(g => 
      g.getMatchs().forEach(m => h.push(m.getHour()))
    );

    let allHours = [...new Set(h)];

    this.hours = allHours.sort((a, b) => a - b);
  }

  constructor(private planing: PlaningService) {  }

  ngOnInit(): void {
    // First generate a list for each ground with list of match
    this.generateGroundsList();

    // Generate list of available hours
    this.generateHoursList();
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

    return new Match(hour, false, -1, '', []);
  }

  formatNumber(num: number) {
    // console.info(formatNumber(900)) // 9h00
    return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1h')
  }
}
