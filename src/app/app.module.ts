import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { StudentComponent } from './dashboard/student/student.component';
import { FacultyComponent } from './dashboard/faculty/faculty.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AdminStudentsComponent } from './dashboard/admin-students/admin-students.component';
import { StudentModalComponent } from './student-modal/student-modal.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DashboardChartsComponent } from './dashboard/admin/dashboard-charts/dashboard-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { NotificationComponent } from './components/notification/notification.component';
import { FileUploadNewComponent } from './dashboard/admin/file-upload-new/file-upload-new.component';
import { NewAdminStudentComponent } from './dashboard/admin/new-admin-student/new-admin-student.component';
import { BScComponent } from './pages/bsc/bsc.component';
import { NewBScComponent } from './pages/home/new-bsc/new-bsc.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { ManagementComponent } from './pages/management/management.component';
import { PureSciencesComponent } from './pages/pure-sciences/pure-sciences.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StudentComponent,
    FacultyComponent,
    StudentListComponent,
    StudentFormComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    AdmissionComponent,
    ContactComponent,
    FooterComponent,
    NotesComponent,
    AdminStudentsComponent,
    StudentModalComponent,
    FileUploadComponent,
    DashboardChartsComponent,
    NotificationComponent,
    FileUploadNewComponent,
    NewAdminStudentComponent,
    BScComponent,
    NewBScComponent,
    EngineeringComponent,
    ManagementComponent,
    PureSciencesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
