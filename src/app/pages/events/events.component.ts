import { Component } from '@angular/core';
// import * as AOS from 'aos';
// @ts-ignore
import * as AOS from 'aos';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
 
   events = [
    {
      title: 'Annual Tech Fest',
      description: 'An exciting showcase of innovations, hackathons, and coding competitions drawing talent from all over the region.',
      img: 'assets/Annual Tech Fest.jpg'
    },
    {
      title: 'Guest Lecture Series',
      description: 'Industry experts and academic leaders share insights on the latest technological advancements and career tips.',
      img: 'assets/Guest Lecture Series.jpg'
    },
    {
      title: 'Cultural Night',
      description: 'A colorful evening of music, dance, and celebration showcasing the diverse talents of our students.',
      img: 'assets/Cultural Night.jpg'
    },
    {
      title: 'Startup Showcase',
      description: 'Student entrepreneurs present their startups to venture capitalists and industry leaders, aiming to secure funding and mentorship.',
      img: 'assets/Startup Showcase.jpg'
    },
    {
      title: 'Annual Sports Meet',
      description: 'An energetic and competitive sports event where students participate in athletics, football, cricket, and more.',
      img: 'assets/Annual Sports Meet.png'
    },
    {
      title: 'Workshop Week',
      description: 'Intensive hands-on training sessions in AI, Robotics, Web Development, and more, led by leading professionals.',
      img: 'assets/Workshop Week.webp'
    }
  ];

}
