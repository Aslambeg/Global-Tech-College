import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
   userName: string = '';
  // userRole: string = '';

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  //   this.userName = this.authService.getUserName();
  //   this.userRole = this.authService.getRole();
  // }
    profile: any = {};
  isEditing: boolean = false;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  // Load user profile
  loadProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (err) => {
        console.error('Error loading profile:', err);
      }
    });
  }

  // Enable editing mode
  editProfile(): void {
    this.isEditing = true;
  }

  // Save updated profile
  saveProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe({
      next: (updated) => {
        this.profile = updated;
        this.isEditing = false;
      },
      error: (err) => {
        console.error('Error updating profile:', err);
      }
    });
  }

  // Cancel editing
  cancelEdit(): void {
    this.isEditing = false;
    this.loadProfile();
  }

  // Get user role from auth service (for conditional UI if needed)
  get role(): string {
    return this.authService.getRole();
  }

}
