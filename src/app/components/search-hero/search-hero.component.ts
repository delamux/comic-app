import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: '../heroes/heroes.component.html'
})
export class SearchHeroComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.findHeroes(params.term);
    });
  }

}
