import { Component } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { StringEnum } from '../../enum/string.enum';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [CoursesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses: any[] = [];

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    const data = localStorage.getItem(StringEnum.STORGAGE_KEY);
    if (data) {
      this.courses = JSON.parse(data);
    }
  }
}
