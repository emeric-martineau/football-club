import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-planing',
  templateUrl: './category-planing.component.html',
  styleUrls: ['./category-planing.component.css']
})
export class CategoryPlaningComponent implements OnInit {

  category: string = '';
  group: string = '';

  private subParam: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subParam = this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
      this.group = params['group'];
   });
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
  }
}
