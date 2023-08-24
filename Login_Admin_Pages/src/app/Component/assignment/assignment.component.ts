import { Component,ViewChild ,ViewContainerRef } from '@angular/core';
import { AssignmenttableComponent } from '../assignmenttable/assignmenttable.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
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

  @ViewChild('container4',{read:ViewContainerRef,static:true})
  container4!:ViewContainerRef;

  AddTopic(){
    this.container4.clear();
    this.container4.createComponent(AssignmenttableComponent)
 }
}
