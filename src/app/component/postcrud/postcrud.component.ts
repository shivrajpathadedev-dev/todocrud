import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-postcrud',
  templateUrl: './postcrud.component.html',
  styleUrls: ['./postcrud.component.scss']
})
export class PostcrudComponent implements OnInit {
isInEditMode:boolean=false
editObj!:Ipost
post:any;
@ViewChild('title') title!:ElementRef
@ViewChild('body') body!:ElementRef
@ViewChild('userId') userId!:ElementRef

posts:Ipost[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  postArr:Array<Ipost>=[
    {
  userId: "1",
  id: "1",
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  userId: '5',
  id: '2',
  title: "qui est esse",
  body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
  userId: "4",
  id: "3",
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
  userId: "2",
  id: "4",
  title: "eum et est occaecati",
  body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
}
]

OnAdd(){
  let userId=this.userId.nativeElement.value;
  let title=this.title.nativeElement.value;
  let body=this.body.nativeElement.value;
  let newPost:Ipost={
    userId:userId,
    title:title,
    body:body,
    id:Date.now().toString()
  }
  console.log(newPost)
  this.postArr.push(newPost)
  this.userId.nativeElement.value=``;
  this.title.nativeElement.value=``;
  this.body.nativeElement.value=``;
}
trackByPost(index:number,item:Ipost){
  return item.id
}
  OnRemove(id:string){
    console.log(id);
    let getIdex=this.postArr.findIndex(t=>t.id===id)
    this.postArr.splice(getIdex,1)
  }
  OnEdit(post:Ipost){
     console.log(post);
     this.isInEditMode=true
     this.editObj=post;
     this.userId.nativeElement.value=this.editObj.userId
     this.title.nativeElement.value=this.editObj.title
     this.body.nativeElement.value=this.editObj.body
  }
  OnUpadate(){
    let UPDATE_ID=this.editObj.id
    let UPDATE_OBJ:Ipost={
      userId:this.userId.nativeElement.value,
      title:this.title.nativeElement.value,
      body:this.body.nativeElement.value,
      id:UPDATE_ID
    }
    console.log(UPDATE_OBJ);
    let getIndex=this.postArr.findIndex(t=>t.id===UPDATE_ID)
    this.postArr[getIndex]=UPDATE_OBJ

    this.isInEditMode=false
    this.userId.nativeElement.value=``;
    this.title.nativeElement.value=``;
    this.body.nativeElement.value=``;
  }

}
