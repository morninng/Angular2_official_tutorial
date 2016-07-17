import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

//import {HEROES} from './mock-hero';
import { Hero } from './../hero';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {


  private heroesUrl = 'https://fir-2practice.firebaseio.com/Heroes.json';

  constructor(private http: Http) {}
  

  getHeroes() : Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then((response) =>{
        let res_arr:Array<any> =  response.json();
        console.log(res_arr);
        return res_arr;
      })
      .catch(this.handleError)
  }

  private handleError(error :any){
    console.log("an error occured" + error);
    return Promise.reject(error.message || error);
  }
/*
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }
*/
  getHero(id:number){
    return this.getHeroes()
      .then( (heroes) =>{
        console.log(heroes);
        var hero = heroes.find((hero) =>{ 
          return hero.id ===id
        })
        return hero;
        }
      );
  }

}
