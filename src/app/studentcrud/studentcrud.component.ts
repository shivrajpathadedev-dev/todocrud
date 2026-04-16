import { Component, OnInit } from '@angular/core';
import { IStudent } from '../model/student';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentsArr:Array<IStudent> = [
  { 
    name: "Shiv",
     id: "ST101", 
    age: 23,
     course: "BCA"
   },
  { 
    name: "Rohit", 
    id: "ST102", 
    age: 23, 
    course: "BBA" 
  },
  { 
    name: "Arjun", 
    id: "ST103", 
    age: 26, 
    course: "BSc"
   },
  {
     name: "DS", 
    id: "ST104",
     age: 22, 
    course: "MCA"
   },
  { 
    name: "Gaju",
     id: "ST105",
     age: 26, 
    course: "BTech"
   }
];
}
