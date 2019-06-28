import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: []
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;
  @Input() index: number;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewHero() {
    this.router.navigate( ['/hero', this.index] );
  }

}
