import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-test',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
selectedSkill : string ='angular'
  constructor() { }

  ngOnInit(): void {
  }
  OnTabChange(skill:string){
    this.selectedSkill=skill
  }

}
