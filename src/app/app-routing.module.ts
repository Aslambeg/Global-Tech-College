import { NgModule } from '@angular/core';
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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Public Pages
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected dashboards with role-based access
  { path: 'dashboard/admin', component: AdminComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'dashboard/student', component: StudentComponent, canActivate: [authGuardGuard], data: { role: 'student' } },
  { path: 'dashboard/faculty', component: FacultyComponent, canActivate: [authGuardGuard], data: { role: 'faculty' } },

  // Admin-only student management routes
  { path: 'students', component: StudentListComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'add-student', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'edit-student/:id', component: StudentFormComponent, canActivate: [authGuardGuard], data: { role: 'admin' } },
  { path: 'notes', component: NotesComponent },

  // Public Register route
  { path: 'register', component: RegisterComponent },

  // Default redirect
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
