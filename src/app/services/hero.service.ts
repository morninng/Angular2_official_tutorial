import { Injectable } from '@angular/core';

import {HEROES} from './mock-hero';
import { Hero } from './../hero';


@Injectable()
export class HeroService {

  constructor() {}

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }

  getHero(id:number){
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id ===id));
  }

}
