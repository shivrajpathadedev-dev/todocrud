import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabtestswitch',
  templateUrl: './tabtestswitch.component.html',
  styleUrls: ['./tabtestswitch.component.scss']
})
export class TabtestswitchComponent implements OnInit {
selectedSkill:string='css'
  constructor() { }

  ngOnInit(): void {
  }

  OnClickAdd(skill:string){
    this.selectedSkill=skill
  }

}
