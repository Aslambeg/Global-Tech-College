// import { animate, style, transition, trigger } from '@angular/animations';
// import { HttpClient } from '@angular/common/http';
// import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { ContactService } from 'src/app/services/contact.service';
// // import * as AOS from 'aos'; // ✅ Import AOS
// // import 
// // import TypeIt from 'typeit';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     trigger('fadeInUp', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(50px)' }),
//         animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
//       ])
//     ])
//   ]
// })
// export class HomeComponent {
//   contact = { name: '', email: '', subject: '', message: '' };
//   showSuccess = false;
//   // contact = { name: '', email: '', subject: '', message: '' };
//   successMessage = '';
//   errorMessage = '';
//   contactForm: FormGroup;
//   submitted = false;
//   // successMessage = '';
//   // errorMessage = '';
//   @ViewChildren('lazySection') lazySections!: QueryList<ElementRef>;
//   @ViewChild('testimonialsTrack', { static: false }) testimonialsTrack!: ElementRef;

//   // Data
//   courses = [
//     { icon: 'assets/Computer Science.webp', title: 'Computer Science', desc: 'BSc / MSc / Research' },
//     { icon: 'assets/Engineering.jpg', title: 'Engineering', desc: 'Mechanical, Civil, ECE' },
//     { icon: 'assets/Management.webp', title: 'Management', desc: 'BBA, MBA' },
//     { icon: 'assets/Pure Sciences.webp', title: 'Pure Sciences', desc: 'Physics, Chemistry, Maths' }
//   ];

//   stats = [
//     { label: 'Students', value: 20000, count: 0 },
//     { label: 'Faculty', value: 450, count: 0 },
//     { label: 'Placements', value: 95, suffix: '%', count: 0 },
//     { label: 'Courses', value: 120, count: 0 }
//   ];

//   events = [
//     { date: 'Aug 25, 2025', title: 'Orientation Day', excerpt: 'Welcome session & campus tour.' },
//     { date: 'Sep 10, 2025', title: 'Tech Fest', excerpt: 'Hackathons, workshops & competitions.' },
//     { date: 'Oct 05, 2025', title: 'Alumni Meet', excerpt: 'Networking & career talks.' }
//   ];

//   testimonials = [
//     { name: 'Riya Sharma', role: 'Alumni', text: 'Great faculty and campus life — made my career!' },
//     { name: 'Adil Khan', role: 'Student', text: 'Hands-on labs and excellent placements.' },
//     { name: 'Meera Patel', role: 'Parent', text: 'Supportive staff and safe environment.' }
//   ];

//   gallery = [
//     'assets/Campus Gallery1.jpg',
//     'assets/Campus Gallery2.jpg',
//     'assets/Campus Gallery3.jpg',
//     'assets/Campus Gallery4.jpg',
//     'assets/Campus Gallery5.jpg',
//     'assets/Campus Gallery6.jpg'
//   ];

//   // IntersectionObserver
//   private observer!: IntersectionObserver;

//   // Testimonials autoplay
//   private testInterval: any;
//   testimonialIndex = 0;
//   constructor(private fb: FormBuilder, private contactService: ContactService, private http: HttpClient) {
//     this.contactForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', [Validators.required, Validators.minLength(10)]]
//     });
//   }

//   get f() {
//     return this.contactForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.successMessage = '';
//     this.errorMessage = '';

//     if (this.contactForm.invalid) {
//       return;
//     }

//     this.contactService.sendContactForm(this.contactForm.value).subscribe({
//       next: () => {
//         this.successMessage = '✅ Your message has been sent successfully!';
//         this.contactForm.reset();
//         this.submitted = false;
//       },
//       error: () => {
//         this.errorMessage = '❌ Something went wrong. Please try again later.';
//       }
//     });
//   }
//   //  onContactSubmit(form: NgForm) {
//   //   if (form.invalid) {
//   //     form.control.markAllAsTouched();
//   //     return;
//   //   }

//   //   this.http.post('http://localhost:3000/contacts', this.contact)
//   //     .subscribe({
//   //       next: () => {
//   //         this.showSuccess = true;
//   //         setTimeout(() => this.showSuccess = false, 3000); // Hide after 3s
//   //         form.resetForm();
//   //       },
//   //       error: (err) => {
//   //         console.error('Error saving contact:', err);
//   //         alert('Failed to send message. Please try again.');
//   //       }
//   //     });
//   // }
//   onContactSubmit(form: any) {
//     // Validation check
//     if (!this.contact.name || !this.contact.email) {
//       return;
//     }

//     // Send to db.json (JSON server)
//     this.http.post('http://localhost:3000/contacts', this.contact).subscribe({
//       next: () => {
//         this.showSuccess = true;
//         setTimeout(() => this.showSuccess = false, 3000);
//         form.resetForm();
//       },
//       error: (err) => {
//         console.error('Error saving contact:', err);
//       }
//     });
//   }
//   ngAfterViewInit(): void {
//     // Setup IntersectionObserver for lazy reveal
//     this.observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const el = entry.target as HTMLElement;
//             el.classList.add('visible');
//             if (el.classList.contains('stats-section')) {
//               this.startCounters();
//             }
//             this.observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.18 }
//     );

//     this.lazySections.forEach(s => this.observer.observe(s.nativeElement));

//     // Start testimonials auto slide
//     this.startTestimonialsAuto();
//   }

//   // Stats animation
//   private startCounters() {
//     this.stats.forEach(stat => {
//       const duration = 1200; // ms
//       const steps = 50;
//       const stepTime = Math.max(Math.floor(duration / steps), 10);
//       const increment = Math.ceil((stat.value) / steps);

//       let current = 0;
//       const intv = setInterval(() => {
//         current += increment;
//         if (current >= stat.value) {
//           current = stat.value;
//           clearInterval(intv);
//         }
//         stat.count = current;
//       }, stepTime);
//     });
//   }

//   // Testimonials
//   startTestimonialsAuto() {
//     this.testInterval = setInterval(() => this.nextTestimonial(), 4000);
//   }
//   stopTestimonialsAuto() {
//     if (this.testInterval) clearInterval(this.testInterval);
//   }
//   nextTestimonial() {
//     this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
//     this.slideTestimonials();
//   }
//   prevTestimonial() {
//     this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
//     this.slideTestimonials();
//   }
//   slideTestimonials() {
//     if (!this.testimonialsTrack) return;
//     const width = (this.testimonialsTrack.nativeElement as HTMLElement).offsetWidth;
//     const track = (this.testimonialsTrack.nativeElement as HTMLElement).querySelector('.track') as HTMLElement;
//     if (track) {
//       track.style.transform = `translateX(-${this.testimonialIndex * (100)}%)`;
//     }
//   }



//   ngOnDestroy(): void {
//     this.stopTestimonialsAuto();
//     if (this.observer) this.observer.disconnect();
//   }
// }
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Template-driven contact model
  contact = { name: '', email: '', subject: '', message: '' };
  showSuccess = false;
  showError = false;

  // Reactive contact form (separate from template-driven form)
  reactiveContactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  @ViewChildren('lazySection') lazySections!: QueryList<ElementRef>;
  @ViewChild('testimonialsTrack', { static: false }) testimonialsTrack!: ElementRef;

  // Data
  courses = [
    { icon: 'assets/Computer Science.webp', title: 'Computer Science', desc: 'BSc / MSc / Research', link: '/bsc' },
    { icon: 'assets/Engineering.jpg', title: 'Engineering', desc: 'Mechanical, Civil, ECE', link: '/Engineering' },
    { icon: 'assets/Management.webp', title: 'Management', desc: 'BBA, MBA',link:'/Management' },
    { icon: 'assets/Pure Sciences.webp', title: 'Pure Sciences', desc: 'Physics, Chemistry, Maths',link:'/Science' }
  ];

  stats = [
    { label: 'Students', value: 20000, count: 0 },
    { label: 'Faculty', value: 450, count: 0 },
    { label: 'Placements', value: 95, suffix: '%', count: 0 },
    { label: 'Courses', value: 120, count: 0 }
  ];

  events = [
    { date: 'Aug 25, 2025', title: 'Orientation Day', excerpt: 'Welcome session & campus tour.' },
    { date: 'Sep 10, 2025', title: 'Tech Fest', excerpt: 'Hackathons, workshops & competitions.' },
    { date: 'Oct 05, 2025', title: 'Alumni Meet', excerpt: 'Networking & career talks.' }
  ];

  testimonials = [
    { name: 'Riya Sharma', role: 'Alumni', text: 'Great faculty and campus life — made my career!' },
    { name: 'Adil Khan', role: 'Student', text: 'Hands-on labs and excellent placements.' },
    { name: 'Meera Patel', role: 'Parent', text: 'Supportive staff and safe environment.' }
  ];

  gallery = [
    'assets/Campus Gallery1.jpg',
    'assets/Campus Gallery2.jpg',
    'assets/Campus Gallery3.jpg',
    'assets/Campus Gallery4.jpg',
    'assets/Campus Gallery5.jpg',
    'assets/Campus Gallery6.jpg'
  ];

  private observer!: IntersectionObserver;
  private testInterval: any;
  testimonialIndex = 0;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private http: HttpClient,
    private router: Router
  ) {
    this.reactiveContactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // convenience getter for reactive form controls
  get f() {
    return this.reactiveContactForm.controls;
  }

  ngOnInit(): void {
    // Any init logic if needed
  }

  // Reactive form submit (if you use the reactive form somewhere)
  onSubmitReactive() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.reactiveContactForm.invalid) {
      return;
    }

    // If you want to use ContactService for posting reactive form:
    this.contactService.sendContactForm(this.reactiveContactForm.value).subscribe({
      next: () => {
        this.successMessage = '✅ Your message has been sent successfully!';
        this.reactiveContactForm.reset();
        this.submitted = false;
      },
      error: () => {
        this.errorMessage = '❌ Something went wrong. Please try again later.';
      }
    });
  }

  // Template-driven form submit: posts to json-server (db.json)
  onContactSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Post to JSON server
    this.http.post('http://localhost:3000/contactUs', this.contact).subscribe({
      next: () => {
        this.showSuccess = true;
        setTimeout(() => (this.showSuccess = false), 3000);
        form.resetForm();
      },
      error: (err) => {
        console.error('Error saving contact:', err);
        this.showError = true;
        setTimeout(() => (this.showError = false), 3000);
      }
    });
  }

  ngAfterViewInit(): void {
    // Setup IntersectionObserver for lazy reveal
    try {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('visible');
              if (el.classList.contains('stats-section')) {
                this.startCounters();
              }
              this.observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      );

      if (this.lazySections && this.lazySections.length) {
        this.lazySections.forEach(s => {
          if (s && s.nativeElement) this.observer.observe(s.nativeElement);
        });
      }
    } catch (e) {
      // IntersectionObserver not supported or other issue
      console.warn('Observer setup failed', e);
    }

    // Start testimonials auto slide
    this.startTestimonialsAuto();
  }

  private startCounters() {
    this.stats.forEach(stat => {
      const duration = 1200; // ms
      const steps = 50;
      const stepTime = Math.max(Math.floor(duration / steps), 10);
      const increment = Math.ceil((stat.value) / steps);

      let current = 0;
      const intv = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intv);
        }
        stat.count = current;
      }, stepTime);
    });
  }

  startTestimonialsAuto() {
    this.testInterval = setInterval(() => this.nextTestimonial(), 4000);
  }

  stopTestimonialsAuto() {
    if (this.testInterval) clearInterval(this.testInterval);
  }

  nextTestimonial() {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
    this.slideTestimonials();
  }

  prevTestimonial() {
    this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.slideTestimonials();
  }

  slideTestimonials() {
    if (!this.testimonialsTrack) return;
    const track = (this.testimonialsTrack.nativeElement as HTMLElement).querySelector('.track') as HTMLElement;
    if (track) {
      track.style.transform = `translateX(-${this.testimonialIndex * 100}%)`;
    }
  }
  downloadBrochure() {
  // If brochure is in assets folder
  const link = document.createElement('a');
  link.href = 'assets/brochure.pdf';   // place your file in src/assets
  link.download = 'College-Brochure.pdf';
  link.click();
}
goToPrograms() {
    this.router.navigate(['/programs']);  // make sure you have a route for programs
  }

  ngOnDestroy(): void {
    this.stopTestimonialsAuto();
    if (this.observer) this.observer.disconnect();
  }
}





