import { Component, OnInit } from '@angular/core';
import { Itab } from 'src/app/model/tab-for';

@Component({
  selector: 'app-tabtestngifandngfor',
  templateUrl: './tabtestngifandngfor.component.html',
  styleUrls: ['./tabtestngifandngfor.component.scss']
})
export class TabtestngifandngforComponent implements OnInit {
selectedSkills:string='html'
 tabArrs:Array<Itab> = [
    {
    tabTitle: 'Angular 14',
    frameWorkName:'angular 14',
    tabContent:`<strong>Angular</strong> Angular is a frontend web framework used to build dynamic, fast, and modern web applications.`
  },
  {
    tabTitle: 'Express',
    frameWorkName:'express',
    tabContent:`<strong>express</strong> Express (or Express.js) is a fast and lightweight web framework for Node.js used to build backend applications and APIs.`
  },
  {
    tabTitle: 'Mongo',
    frameWorkName:'mongo',
    tabContent:`<strong>mongo</strong> MongoDB is a NoSQL database used to store data in a flexible, JSON-like format.`
  },
  {
    tabTitle: 'Node',
    frameWorkName:'node',
    tabContent:`<strong>node</strong> Node.js is a runtime environment that allows you to run JavaScript outside the browser (on the server).`
  }

]
  constructor() { }

  ngOnInit(): void {
  }

  onTodoChange(skill:string){
    this.selectedSkills=skill
  }
}
