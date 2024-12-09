import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  // hero:string='WindStorm';

  hero:Hero = {
    id: 1,
    name:"WindStorm"
  }

  // heroes = HEROES;

  // for event binding intialize the method

  SelectedHero?: Hero

  // onSelect(hero:Hero):void{
  //   this.SelectedHero=hero;
  // }


// After creating service we update heroes 
  heroes: Hero[] = []

  constructor(private heroservices: HeroService, private messageService: MessageService){}

  // getHeroes():void {
  //   this.heroes=this.heroservices.getHeroes();
  // }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.SelectedHero=hero;
    this.messageService.addMessage(`HeroesComponent :
                                          Selected Hero id = ${hero.id},
                                          Selected Hero name = ${hero.name}`
                                  )
  }

  // subscribe the observable and comment old upper getHeroes()
  getHeroes(): void{
    this.heroservices.getHeroes()
    .subscribe(heroes=>this.heroes=heroes)
  }


}
