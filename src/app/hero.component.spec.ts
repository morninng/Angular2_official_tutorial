/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HeroComponent } from './hero.component';

beforeEachProviders(() => [HeroComponent]);

describe('App: Hero', () => {
  it('should create the app',
      inject([HeroComponent], (app: HeroComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([HeroComponent], (app: HeroComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
