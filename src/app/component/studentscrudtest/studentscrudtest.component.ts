import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IStudent } from '../../model/student';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackbarservice } from '../service/snackbar.service';

@Component({
  selector: 'app-studentscrudtest',
  templateUrl: './studentscrudtest.component.html',
  styleUrls: ['./studentscrudtest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class studentscrudtest implements OnInit {
  isInEditMode: boolean = false
  editObj!: IStudent

  @ViewChild('studentname') studentname!: ElementRef
  @ViewChild('studentage') studentage!: ElementRef
  @ViewChild('studentcourse') studentcourse!: ElementRef

  // students: IStudent[] = [];
  constructor(private _snackbar: MatSnackBar,
    private _shivraj : snackbarservice
     ) {

  }
  ngOnInit(): void {
  }

  studentsArr: Array<IStudent> = [
    {
      name: "Jon Doe",
      age: "23",
      course: "BCA",
      id: "21"
    },
    {
      name: "May Doe",
      age: "23",
      course: "BBA",
      id: "22"
    },
    {
      name: "July Doe",
      age: "26",
      course: "BSc",
      id: "23"
    },
    {
      name: "Mays Doe",
      age: "22",
      course: "MCA",
      id: "24"
    },
    {
      name: "Gaju Kadam",
      age: "26",
      course: "BTech",
      id: "25"
    }
  ];
  Onadd() {
    let studentname = this.studentname.nativeElement.value;
    let studentage = this.studentage.nativeElement.value;
    let studentcourse = this.studentcourse.nativeElement.value;

    if(studentname.length>0||studentage.length>0||studentcourse.length>0){
      let newstudent: IStudent = {
      name: studentname,
      age: studentage,
      course: studentcourse,
      id: Date.now().toString()
    }
    this.studentsArr.push(newstudent)
    this.studentname.nativeElement.value = ``;
    this.studentage.nativeElement.value = ``;
    this.studentcourse.nativeElement.value = ``;

  this._shivraj.opensnackbar(`The student ${newstudent.name} is added successfully!!!`)
  }
    }
    
  trackByStudent(index: number, item: IStudent) {
    return item.id
  }

  OnRemove(id: string) {
    // console.log(id);
    let getIndex = this.studentsArr.findIndex(t => t.id === id)
    this.studentsArr.splice(getIndex, 1)

    this._snackbar.open(`The student is removed successfully!!!!`, "Close", {
      duration: 1000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    })
  }

  OnEdit(student: IStudent) {
    // console.log(student);
    this.isInEditMode = true
    this.editObj = student;
    this.studentname.nativeElement.value = this.editObj.name
    this.studentage.nativeElement.value = this.editObj.age
    this.studentcourse.nativeElement.value = this.editObj.course
  }

  OnUpdate() {
    //UPDATE_ID
    let UPDATE_ID = this.editObj.id
    //UPDATE_OBJ
    let UPDATE_OBJ: IStudent = {
      name: this.studentname.nativeElement.value,
      age: this.studentage.nativeElement.value,
      course: this.studentcourse.nativeElement.value,
      id: UPDATE_ID
    }
    // console.log(UPDATE_OBJ);
    let getIndex = this.studentsArr.findIndex(t => t.id === UPDATE_ID)
    this.studentsArr[getIndex] = UPDATE_OBJ
    this.studentname.nativeElement.value = ``;
    this.studentage.nativeElement.value = ``;
    this.studentcourse.nativeElement.value = ``;
    this.isInEditMode = false

    this._snackbar.open(`The student ${UPDATE_OBJ.name} is updated successfully!!!`, "Close", {
      duration: 1000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    })
  }

}
