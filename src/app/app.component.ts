import { Component, OnInit } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {HeroService} from './services/hero.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[HeroComponent],
  providers:[HeroService]
})
export class AppComponent implements OnInit {

  title="tour of hero";
  constructor() {}

  ngOnInit() {
  }

}
