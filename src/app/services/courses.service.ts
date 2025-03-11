import { Injectable } from '@angular/core';
import { StringEnum } from '../enum/string.enum';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: any;

  constructor() {}

  // getCourses() {
  //   const data = localStorage.getItem(StringEnum.STORGAGE_KEY);
  //   if (data) {
  //     const courses = JSON.parse(data);
  //   }
  // }
}

function getCourses() {
  throw new Error('Function not implemented.');
}
