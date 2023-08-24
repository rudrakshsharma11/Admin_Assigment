import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { AddCourseComponent } from './Component/add-course/add-course.component';
import { AddBatchComponent } from './Component/add-batch/add-batch.component';
import { AddTeacherComponent } from './Component/add-teacher/add-teacher.component';
import { AddStudentsComponent } from './Component/add-students/add-students.component';
import { AddProgramComponent } from './Component/add-program/add-program.component';
import { HomeComponent } from './Component/home/home.component';
import { ExamsComponent } from './Component/exams/exams.component';
import { AssignmentComponent } from './Component/assignment/assignment.component';
import { ReportsComponent } from './Component/reports/reports.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AddCourseComponent},
  {path:'batch',component:AddBatchComponent},
  {path:'teacher',component:AddTeacherComponent},
  {path:'student',component:AddStudentsComponent},
  {path:'admin/program',component:AddProgramComponent},
  {path:'home',component:HomeComponent},
  {path:'exams',component:ExamsComponent},
  {path:'assignment',component:AssignmentComponent},
  {path:'reports',component:ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
