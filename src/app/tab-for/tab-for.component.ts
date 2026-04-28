import { Component, OnInit } from '@angular/core';
import { Itab } from '../model/tab-for';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
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
selectedSkills:string='node'
  constructor() { }

  ngOnInit(): void {
  }

  onTodoChange(skill:string){
    this.selectedSkills=skill
  }

}
