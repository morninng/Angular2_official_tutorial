import { Injectable } from '@angular/core';

import {HEROES} from './mock-hero';


@Injectable()
export class HeroService {

  constructor() {}

  getHeroes() {
    return HEROES;
  }
}