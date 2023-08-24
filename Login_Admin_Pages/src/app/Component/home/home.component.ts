import { Component,ViewChild ,ViewContainerRef } from '@angular/core';
import { AttendanceComponent } from '../attendance/attendance.component';
import { BatchProgramComponent } from '../batch-program/batch-program.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form1 = true; form2 = false; form3 = false; form4 = false; form5 = false;
  clicked = '';
  Click(value: string): void {
    this.clicked = value;
    this.form2 = true;
  }
  Click1(value: string): void {
    this.clicked = value;
    this.form2 = true;
    this.form3 = true;
  }
  Click2(value: string): void {
    this.clicked = value;
    this.form2 = true;
    this.form3 = true;
    this.form4 = true;
  }
  Click3(value: string): void {
    this.clicked = value;
    this.form2 = true;
    this.form3 = true;
    this.form4 = true;
    this.form5 = true;
  }

  @ViewChild('container1',{read:ViewContainerRef,static:true})
  container1!:ViewContainerRef;

  AddTopic(){
    this.container1.clear();
    this.container1.createComponent(AttendanceComponent)
 }

 form12=false;
 form13=false;
  Click01(value: string): void {
    this.clicked = value;
    this.form12 = true;
  }
  Click11(value: string): void {
    this.clicked = value;
    this.form12 = true;
    this.form13 = true;
  }
  Click12(value: string): void {
    this.clicked = value;
    this.form12 = true;
    this.form13 = true;
    this.container2.clear();
    this.container2.createComponent(BatchProgramComponent)
  }
  
 @ViewChild('container2',{read:ViewContainerRef,static:true})
  container2!:ViewContainerRef;
}
