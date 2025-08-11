import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
//   role = '';

// constructor(private auth: AuthService) {
// this.role = this.auth.getRole();
// }

// uploadNote(event: any) {
// const file = event.target.files[0];
// if (file) {
// alert('Note uploaded: ' + file.name);
// // You can add logic to save to backend here
// }
// }


// notes: any[] = [];
// role: string = '';
// apiUrl = 'http://localhost:3000/notes';

// constructor(private http: HttpClient, private auth: AuthService) {}

// ngOnInit() {
// this.role = this.auth.getRole();
// this.fetchNotes();
// }

// fetchNotes() {
// this.http.get<any[]>(this.apiUrl).subscribe(data => {
// this.notes = data;
// });
// }

// uploadNote(event: any) {
// const file = event.target.files[0];
// if (file) {
// const note = {
// name: file.name,
// url: URL.createObjectURL(file) // In real case, upload to backend or cloud
// };
// this.http.post(this.apiUrl, note).subscribe(() => {
// this.fetchNotes();
// });
// }
// }

// deleteNote(id: number) {
// this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
// this.fetchNotes();
// });
// }
notes: any[] = [];
users:any[]=[];
role: string = '';
apiUrl: string = 'http://localhost:3000/notes';

constructor(private http: HttpClient, private auth: AuthService) {}

ngOnInit(): void {
this.role = this.auth.getRole();
this.fetchNotes();
this.auth.getUsers().subscribe((data:any)=>{
  this.users=data;
})
}

fetchNotes(): void {
this.http.get<any[]>(this.apiUrl).subscribe({
next: data => {
this.notes = data;
},
error: err => {
console.error('Error fetching notes:', err);
}
});
}

uploadNote(event: any): void {
const file = event.target.files[0];
if (file) {
const note = {
name: file.name,
url: URL.createObjectURL(file) // For demo only. Use real upload in prod.
};

  this.http.post(this.apiUrl, note).subscribe({
    next: () => {
      this.fetchNotes();
    },
    error: err => {
      console.error('Error uploading note:', err);
    }
  });
}
}

deleteNote(id: number): void {
this.http.delete(`${this.apiUrl}/${id}`).subscribe({
next: () => {
this.fetchNotes();
},
error: err => {
console.error('Error deleting note:', err);
}
});
}

isAdmin(): boolean {
return this.role === 'admin';
}

}
