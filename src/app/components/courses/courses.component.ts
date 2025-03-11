import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TruncateWordsPipe } from '../../pipes/truncate-words.pipe';
import { StringEnum } from '../../enum/string.enum';

@Component({
  selector: 'app-courses',
  imports: [TruncateWordsPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  @Input() courses: any;
  @Input() isAdmin = false;
  @Output() del = new EventEmitter();

  deleteCourse(course: any) {
    this.del.emit(course);
  }
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
