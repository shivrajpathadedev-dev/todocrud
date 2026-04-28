import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
tabArrs = [
  {
    tabTitle: 'Tesla Model S',
    frameWorkName: 'tesla',
    tabContent: `<strong>Tesla Model S</strong> Tesla Model S is a premium electric car known for its high performance and long range.`
  },
  {
    tabTitle: 'BMW X5',
    frameWorkName: 'bmw',
    tabContent: `<strong>BMW X5</strong> BMW X5 is a luxury SUV offering powerful engine options and advanced features.`
  },
  {
    tabTitle: 'Audi A6',
    frameWorkName: 'audi',
    tabContent: `<strong>Audi A6</strong> Audi A6 is a luxury sedan with elegant design and cutting-edge technology.`
  },
  {
    tabTitle: 'Mercedes C-Class',
    frameWorkName: 'mercedes',
    tabContent: `<strong>Mercedes C-Class</strong> Mercedes C-Class is a premium sedan with comfort and performance.`
  },
  {
    tabTitle: 'Hyundai Creta',
    frameWorkName: 'hyundai',
    tabContent: `<strong>Hyundai Creta</strong> Creta is a popular compact SUV in India with stylish looks and features.`
  },
  {
    tabTitle: 'Kia Seltos',
    frameWorkName: 'kia',
    tabContent: `<strong>Kia Seltos</strong> Seltos is a feature-rich SUV known for its modern design.`
  },
];
selectedSkill:string='kia'
  constructor() { }

  ngOnInit(): void {
  }

  onTodoChange(skill:string){
    this.selectedSkill=skill
  }

}
