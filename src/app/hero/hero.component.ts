import { Component } from '@angular/core';
import { Hero } from './../hero';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import {HeroService} from './../services/hero.service';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'hero-root',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroComponent {
  title = 'hero component';
  selectedHero: Hero;
  heroes :Hero[];


  constructor( private router: Router, private heroService: HeroService){

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroesSlowly().then(
      heroes => this.heroes = heroes
    );
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

}

