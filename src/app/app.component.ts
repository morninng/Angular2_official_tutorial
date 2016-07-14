import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes :Hero[];


  constructor( private heroService: HeroService){

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

}

