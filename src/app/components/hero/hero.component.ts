import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  hero: any = {};
  homeRoute: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = heroesService.getHero(Number(params.id));
      this.homeRoute = this.hero.home === 'DC' ? 'assets/img/dc.png' : 'assets/img/marvel.png';
    });
  }
}
