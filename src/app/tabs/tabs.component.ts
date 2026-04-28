import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
tabArrs = [
  {
    tabTitle: 'TypeScript',
    frameWorkName: 'typescript',
    tabContent: `<strong>TypeScript</strong> TypeScript is a superset of JavaScript that adds static typing.`
  },
  {
    tabTitle: 'Bootstrap',
    frameWorkName: 'bootstrap',
    tabContent: `<strong>Bootstrap</strong> Bootstrap is a CSS framework used to build responsive and mobile-first websites.`
  },
  {
    tabTitle: 'React',
    frameWorkName: 'react',
    tabContent: `<strong>React</strong> React is a JavaScript library used to build user interfaces.`
  }
];
  selectedSkills:string='react'
  constructor() { }

  ngOnInit(): void {
  }

  onTodoChange(skill:string){
    this.selectedSkills=skill
  }
  
}
