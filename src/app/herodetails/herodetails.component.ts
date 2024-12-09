import { Component , Input} from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent {

  @Input() hero?: Hero

  constructor(private route:ActivatedRoute, private location:Location, private heroservice: HeroService){

  }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroservice.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


}
