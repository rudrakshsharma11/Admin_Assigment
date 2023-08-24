import { Component,ViewChild ,ViewContainerRef } from '@angular/core';
import { ExamComponent } from '../exam/exam.component';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {
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

  @ViewChild('container3',{read:ViewContainerRef,static:true})
  container3!:ViewContainerRef;

  AddTopic(){
    this.container3.clear();
    this.container3.createComponent(ExamComponent)
 }

}
