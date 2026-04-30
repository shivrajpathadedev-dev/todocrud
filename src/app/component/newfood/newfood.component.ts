import { Component, OnInit } from '@angular/core';
import { Inewfood } from '../../model/newfood';

@Component({
  selector: 'app-newfood',
  templateUrl: './newfood.component.html',
  styleUrls: ['./newfood.component.scss']
})
export class NewfoodComponent implements OnInit {
tabArrs:Array<Inewfood>= [
  {
    tabTitle: 'Tacos',
    frameWorkName: 'tacos',
    tabContent: `<strong>Tacos</strong> Tacos are a traditional Mexican dish made with folded tortillas filled with meat and veggies.`
  },
  {
    tabTitle: 'Sushi',
    frameWorkName: 'sushi',
    tabContent: `<strong>Sushi</strong> Sushi is a Japanese dish made with vinegared rice and seafood or vegetables.`
  },
  {
    tabTitle: 'Ramen',
    frameWorkName: 'ramen',
    tabContent: `<strong>Ramen</strong> Ramen is a Japanese noodle soup with rich broth and toppings.`
  },
  {
    tabTitle: 'Shawarma',
    frameWorkName: 'shawarma',
    tabContent: `<strong>Shawarma</strong> Shawarma is a Middle Eastern wrap filled with roasted meat and sauces.`
  },
  {
    tabTitle: 'Baklava',
    frameWorkName: 'baklava',
    tabContent: `<strong>Baklava</strong> Baklava is a sweet pastry made with layers of filo and nuts.`
  }
];
selectedSkills:string='sushi'
  constructor() { }

  ngOnInit(): void {
  }

  onTodoChange(skill:string){
    this.selectedSkills=skill
  }

}
