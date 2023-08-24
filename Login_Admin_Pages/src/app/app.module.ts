import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
import { AddCourseComponent } from './Component/add-course/add-course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NavabrComponent } from './Component/navabr/navabr.component';
import {MatMenuModule} from '@angular/material/menu';
import { AddBatchComponent } from './Component/add-batch/add-batch.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddTeacherComponent } from './Component/add-teacher/add-teacher.component';
import { AddStudentsComponent } from './Component/add-students/add-students.component';
import {MatSelectModule} from '@angular/material/select';
import { AddProgramComponent } from './Component/add-program/add-program.component';
import { NavbarteacherComponent } from './Component/navbarteacher/navbarteacher.component';
import { HomeComponent } from './Component/home/home.component';
import { ExamsComponent } from './Component/exams/exams.component';
import { AssignmentComponent } from './Component/assignment/assignment.component';
import { ReportsComponent } from './Component/reports/reports.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AttendanceComponent } from './Component/attendance/attendance.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { BatchProgramComponent } from './Component/batch-program/batch-program.component';
import { ExamComponent } from './Component/exam/exam.component';
import { AssignmenttableComponent } from './Component/assignmenttable/assignmenttable.component';


















@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    AddCourseComponent,
    NavabrComponent,
    AddBatchComponent,
    AddTeacherComponent,
    AddStudentsComponent,
    AddProgramComponent,
    NavbarteacherComponent,
    HomeComponent,
    ExamsComponent,
    AssignmentComponent,
    ReportsComponent,
    AttendanceComponent,
    BatchProgramComponent,
    ExamComponent,
    AssignmenttableComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
