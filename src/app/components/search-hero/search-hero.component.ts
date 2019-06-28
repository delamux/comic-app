import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {
  heroes: Hero[] = [];
  term: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.findHeroes(params.term);
      this.term = params.term;
    });
  }

}
