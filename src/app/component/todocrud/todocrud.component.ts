import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todocrud',
  templateUrl: './todocrud.component.html',
  styleUrls: ['./todocrud.component.scss']
})
export class TodocrudComponent implements OnInit {
isInEditMode:boolean=false
editObj!:Itodo
  todo: any;
  @ViewChild('todoControl') todoControl!: ElementRef
  constructor() { }
  ngOnInit(): void {
  }
  todosArr: Array<Itodo> = [
    {
      toodItem: "jon",
      todoId: "23"
    },
    {
      toodItem: "May",
      todoId: "26"
    },

    {
      toodItem: "John",
      todoId: "21"
    }
  ]

  OnTodoAdd(ele: HTMLInputElement) {
    let val = ele.value
    // console.log(val)
    let newTodo: Itodo = {
      toodItem: val,
      todoId: Date.now().toString()
    }
    this.todosArr.push(newTodo)
    this.todoControl.nativeElement.value=``;
  }
  trackbyFun(index: number, item: Itodo) {
    return item.todoId
  }
  OnRemove(id: string) {
    console.log(id);
    let getIndex = this.todosArr.findIndex(t => t.todoId === id)
    this.todosArr.splice(getIndex, 1)
  }

  OnEdit(todo:Itodo){
    console.log(todo);
    this.isInEditMode=true
    this.editObj=todo;
    this.todoControl.nativeElement.value=this.editObj.toodItem
  }

  OnUpdate(){
    //UPDATE_ID
   let UPDATE_ID=this.editObj.todoId
    //UPDATE_OBJ
    let UPDATE_OBJ:Itodo={
      toodItem:this.todoControl.nativeElement.value,
      todoId:UPDATE_ID
    }
    console.log(UPDATE_OBJ);
    let getIndex=this.todosArr.findIndex(t=>t.todoId===UPDATE_ID)
    this.todosArr[getIndex]=UPDATE_OBJ
    this.todoControl.nativeElement.value=``;
    this.isInEditMode=false
  }
}
