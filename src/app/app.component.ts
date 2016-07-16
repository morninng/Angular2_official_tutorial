import { Component, OnInit } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {HeroService} from './services/hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ ROUTER_DIRECTIVES],
  providers:[HeroService]
})
export class AppComponent implements OnInit {

  title="tour of hero";
  constructor() {}

  ngOnInit() {
  }

}
