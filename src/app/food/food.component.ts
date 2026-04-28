import { Component, OnInit } from '@angular/core';
import { Itab } from '../model/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
tabArrs: Array<Itab> = [
  {
    tabTitle: 'Pizza',
    frameWorkName: 'pizza',
    tabContent: `<strong>Pizza</strong> Pizza is a popular Italian dish made with a flat dough base topped with cheese, tomato sauce, and various toppings.`
  },
  {
    tabTitle: 'Burger',
    frameWorkName: 'burger',
    tabContent: `<strong>Burger</strong> Burger is a sandwich consisting of a patty placed inside a sliced bun with veggies and sauces.`
  },
  {
    tabTitle: 'Biryani',
    frameWorkName: 'biryani',
    tabContent: `<strong>Biryani</strong> Biryani is a flavorful Indian rice dish cooked with spices, meat, or vegetables.`
  },
  {
    tabTitle: 'Pasta',
    frameWorkName: 'pasta',
    tabContent: `<strong>Pasta</strong> Pasta is an Italian dish made from wheat dough served with sauces like Alfredo or marinara.`
  },
  {
    tabTitle: 'Dosa',
    frameWorkName: 'dosa',
    tabContent: `<strong>Dosa</strong> Dosa is a South Indian crispy crepe made from fermented rice and lentil batter.`
  },
  {
    tabTitle: 'Paneer',
    frameWorkName: 'paneer',
    tabContent: `<strong>Paneer</strong> Paneer is a fresh Indian cheese used in many delicious curry dishes.`
  }
];
selectedSkills:string='paneer'
  constructor() { }

  ngOnInit(): void {
  }
  onTodoChange(skill:string){
    this.selectedSkills=skill
  }

}
