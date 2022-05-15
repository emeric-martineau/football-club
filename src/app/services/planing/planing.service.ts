import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

export class Team {
  constructor(private name: string, private score: number) { }

  getName(): string {
    return this.name;
  }

  getScore(): number {
    return this.score;
  }
}

export class Match {
  constructor(private hour: number,
    private played: boolean,
    private categoryId: number,
    private name: string,
    private teams: Team[],
    private ground: string) { }

  getHour(): number {
    return this.hour;
  }

  isPlayed(): boolean {
    return this.played;
  }

  getCategoryId(): number {
    return this.categoryId;
  }

  getName(): string {
    return this.name;
  }

  getTeams(): Team[] {
    return this.teams;
  }

  getGround(): string {
    return this.ground;
  }
}

export class Ground {
  constructor(private name: string, private matchs: Match[]) {}

  getName(): string {
    return this.name;
  }

  getMatchs(): Match[] {
    return this.matchs;
  }
}

export class Rank {
    constructor(
        private teamName: string,
        private play: number, 
        private win: number, 
        private o2o: number, 
        private lost: number, 
        private goalIn: number, 
        private goalOut: number, 
        private points: number) {  }

    getTeamName(): string {
        return this.teamName;
    }

    getPlay(): number {
        return this.play;
    }

    getWin(): number {
        return this.win;
    }

    getO2O(): number {
        return this.o2o;
    }

    getLoose(): number {
        return this.lost;
    }

    getGoalIn(): number {
        return this.goalIn;
    }

    getGoalOut(): number {
        return this.goalOut;
    }

    getPoints(): number {
        return this.points;
    }
}

export class Group {
  constructor(private name: string, private rank: Rank[], private matchs: Match[]) {

  }

  getName(): string {
    return this.name;
  }

  getMatchs(): Match[] {
    return this.matchs;
  }

  getRanks(): Rank[] {
      return this.rank;
  }
}

export class Category {
  constructor(private name: string, private group: Group[], private final: Match[]) { };

  public getName(): string {
      return this.name;
  }

  public getGroup(): Group[] {
      return this.group;
  }

  public getFinal(): Match[] {
      return this.final;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PlaningService {
  httpData$: Observable<any> = this.http.get('/data/publier_1.json');
  matchs: Subject<Map<string, Match[]>> = new Subject();
  categories: Subject<Category[]> = new Subject();

  constructor(private http: HttpClient) {
    this.httpData$.subscribe(d => {
        this.loadMatchs(d);
        this.loadCategories(d);
    });
  }

  getMatchs(): Observable<Map<string, Match[]>> {
    return this.matchs.asObservable();
  }

  getCategories(): Observable<Category[]> {
    return this.categories.asObservable();
  }

  private loadMatchs(data: any) {
    let currentMatch;
    let matchs: Match[] | undefined;
    let newMatch: Match;

    let allMatchs = new Map<string, Match[]>();

    for(let indexMatch = 0; indexMatch < data.PlanningGeneral.Match.length; indexMatch++) { 
      currentMatch = data.PlanningGeneral.Match[indexMatch];

      newMatch = this.generateMatch(currentMatch);
 
      matchs = allMatchs.get(currentMatch.Terrain)

      if (matchs) {
        matchs.push(newMatch)
      } else {
        allMatchs.set(currentMatch.Terrain, [newMatch]);
      }
    }

    this.matchs.next(allMatchs);
  }

  private loadCategories(data: any) {
    let categories: Category[] = [];

    data.Categorie.forEach((element: any) => {
        categories.push(new Category(element.Name, this.generateGroups(element.Groupe), this.generateMatchs(element.PhaseFinale.Matchs.Match)))
    });

    this.categories.next(categories);
  }

  private generateMatch(m: any): Match {
    return new Match(
        m.Heure / 100000,
        m.Status == 2, // 1 : not player, 2 : played
        m.CategoryID,
        m.MatchNom, 
        [
          new Team(m.Equipe1, m.Score1),
          new Team(m.Equipe2, m.Score2)
        ],
        m.Terrain);
  }

  private generateMatchs(m: any): Match[] {
      let matchs: Match[] = [];

      m.forEach((element: any) => matchs.push(this.generateMatch(element)));
      
      return matchs;
  }

  private generateRank(r: any): Rank[] {
    let ranks: Rank[] = [];

    // J: nombre de matchs joués
    // V : nombre de victoires
    // N : nombre de matchs nuls
    // D : nombre de défaites
    // BP : nombre de buts marqués
    // BC : nombre de buts encaissés
    r.forEach((element: any) => ranks.push(
        new Rank(element.Equipe, element.J, element.V, element.N, element.D, element.BC, element.BP, element.Points)
    ));
    
    return ranks;
  }

  private generateGroups(g: any): Group[] {
    let groups: Group[] = [];

    g.forEach((element: any) => groups.push(new Group(element.NomGroupe, this.generateRank(element.Classement.Place), this.generateMatchs(element.Matchs.Match))));

    return groups;
  }
}
