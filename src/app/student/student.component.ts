import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentdata:any=[];
  constructor(private _studentService:StudentService){
    _studentService.getStudents().subscribe(
      (data:any)=>{
        console.log(data);
        this.studentdata=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

  delete(id:any){
    if(confirm("Are you sure to delete?")==true){
      this._studentService.deleteStudent(id).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Student record Deleted Successfully!");
          this.studentdata=data;
        },(err:any)=>{
          alert("Internal Server Error!");
        }
      )
    }else{
      alert("You have Cancelled!");
    }
  }

}
