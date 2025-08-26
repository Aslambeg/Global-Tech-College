import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { authGuardGuard } from './guards/auth.guard.guard';
import { StudentComponent } from './dashboard/student/student.component';
import { FacultyComponent } from './dashboard/faculty/faculty.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AdminStudentsComponent } from './dashboard/admin-students/admin-students.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DashboardChartsComponent } from './dashboard/admin/dashboard-charts/dashboard-charts.component';
import { FileUploadNewComponent } from './dashboard/admin/file-upload-new/file-upload-new.component';
import { NewAdminStudentComponent } from './dashboard/admin/new-admin-student/new-admin-student.component';
import { BScComponent } from './pages/bsc/bsc.component';
import { NewBScComponent } from './pages/home/new-bsc/new-bsc.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { ManagementComponent } from './pages/management/management.component';
import { PureSciencesComponent } from './pages/pure-sciences/pure-sciences.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoticesComponent } from './dashboard/student/notices/notices.component';
import { ProfileComponent } from './dashboard/student/profile/profile.component';
import { AssignmentsComponent } from './dashboard/student/assignments/assignments.component';
import { ScheduleComponent } from './dashboard/student/schedule/schedule.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'dashboard/admin', component: AdminComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'dashboard/student', component: StudentComponent, canActivate: [authGuardGuard], data: { role: 'student' } },
//   { path: 'dashboard/faculty', component: FacultyComponent, canActivate: [authGuardGuard], data: { role: 'faculty' } },
//   { path: 'students', component: StudentListComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'add-student', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'edit-student/:id', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'register', component: RegisterComponent },
//   { path: 'students', component: StudentListComponent },
//   { path: 'add-student', component: StudentFormComponent },
//   { path: 'edit-student/:id', component: StudentFormComponent }, 
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];

2.// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   // Role-based Dashboards
//   // {
//   //   path: 'dashboard/admin',
//   //   component: AdminComponent,
//   //   canActivate: [authGuardGuard],
//   //   data: { role: 'admin' },
//   // },
//   { path: 'dashboard/admin', component: AdminComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },

//   // Public Pages
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'events', component: EventsComponent },
//   { path: 'admission', component: AdmissionComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },

//   // Protected dashboards with role-based access
//   { path: 'dashboard/admin', component: AdminComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'dashboard/student', component: StudentComponent, canActivate: [authGuardGuard], data: { role: 'student' } },
//   { path: 'dashboard/faculty', component: FacultyComponent, canActivate: [authGuardGuard], data: { role: 'faculty' } },

//   // Admin-only student management routes
//   { path: 'students', component: StudentListComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'add-student', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'edit-student/:id', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'notes', component: NotesComponent },

//   // Public Register route
//   { path: 'register', component: RegisterComponent },
//   { path: 'dashboard/admin/students', component: AdminStudentsComponent },
//   // {path:'uplaod',component:FileUploadComponent},
//   {
//     path: 'dashboard/admin/fileupload',
//     component: FileUploadComponent,
//     canActivate: [authGuardGuard] // accessible by all logged in users
//   },
//   { path: 'charts', component: DashboardChartsComponent },

//   // Default redirect
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];
// const routes: Routes = [
//   // Public Routes
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'events', component: EventsComponent },
//   { path: 'admission', component: AdmissionComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },

//   // Admin Dashboard with Children
//   {
//     path: 'dashboard/admin',
//     component: AdminComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'admin' },
//     children: [
//       // { path: '', redirectTo: 'students', pathMatch: 'full' },
//       { path: 'students', component: AdminStudentsComponent },
//       { path: 'fileupload', component: FileUploadComponent },
//       { path: 'charts', component: DashboardChartsComponent },
//       { path: 'fileupload1', component: FileUploadNewComponent },
//       { path: 'students1', component: NewAdminStudentComponent }
//     ]
//   },

//   // Student & Faculty Dashboard
//   {
//     path: 'dashboard/student',
//     component: StudentComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'student' }
//   },
//   {
//     path: 'dashboard/faculty',
//     component: FacultyComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'faculty' }
//   },

//   // Standalone Admin Routes
//   { path: 'students', component: StudentListComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'add-student', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
//   { path: 'edit-student/:id', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },

//   // Notes for all logged-in users
//   { path: 'notes', component: NotesComponent, canActivate: [authGuardGuard] },

//   // Default redirect
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Standalone admin dashboard and tools (no children!)
  { path: 'dashboard/admin', component: AdminComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'dashboard/admin/students', component: AdminStudentsComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'dashboard/admin/fileupload', component: FileUploadComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'dashboard/admin/charts', component: DashboardChartsComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },

  // Other dashboards
   
//     path: 'dashboard/admin',
//     component: AdminComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'admin' },
//     children: [
//       { path: 'students', component: AdminStudentsComponent },
//       { path: 'students1', component: NewAdminStudentComponent },
//       { path: 'fileupload', component: FileUploadComponent },
//       { path: 'fileupload1', component: FileUploadNewComponent }, 
//       { path: 'charts', component: DashboardChartsComponent }
//     ]
//   },
   
  { path: 'dashboard/student', component: StudentComponent, canActivate: [authGuardGuard], data: { role: 'student' } , children:[
    {path:"profile",component:ProfileComponent},
    {path:"assignment",component:AssignmentsComponent},
    {path:"notices",component:NoticesComponent},
    {path:"schedule",component:ScheduleComponent},

    // {path:"",component:ProfileComponent},

  ] },
  { path: 'dashboard/faculty', component: FacultyComponent, canActivate: [authGuardGuard], data: { role: 'faculty' } },

  // Other pages
  { path: 'notes', component: NotesComponent, canActivate: [authGuardGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'bsc', component: BScComponent },
  { path: "NewBSc", component: NewBScComponent },
  { path: "Engineering", component: EngineeringComponent },
  { path: "Management", component: ManagementComponent },
  { path: "Science", component: PureSciencesComponent },
  // { path: "notices", component: NoticesComponent },
  // { path: "profile", component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard (must be last) 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 // const routes: Routes = [
//   // Public Pages
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'events', component: EventsComponent },
//   { path: 'admission', component: AdmissionComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },

//   // Role-based Dashboards
//   {
//     path: 'dashboard/admin',
//     component: AdminComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'admin' },
//     children: [
//       { path: 'students', component: AdminStudentsComponent },
//       { path: 'students1', component: NewAdminStudentComponent },
//       { path: 'fileupload', component: FileUploadComponent },
//       { path: 'fileupload1', component: FileUploadNewComponent }, 
//       { path: 'charts', component: DashboardChartsComponent }
//     ]
//   },
//   {
//     path: 'dashboard/student',
//     component: StudentComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'student' }
//   },
//   {
//     path: 'dashboard/faculty',
//     component: FacultyComponent,
//     canActivate: [authGuardGuard],
//     data: { role: 'faculty' }
//   },

//   // Notes accessible to all logged in users
//   { path: 'notes', component: NotesComponent, canActivate: [authGuardGuard] },

//   // Default redirect
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }