import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { StringEnum } from '../../enum/string.enum';
import { TruncateWordsPipe } from '../../pipes/truncate-words.pipe';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  model: any = {};
  cover!: string | null;
  cover_file: any;
  showError = false;
  courses: any[] = [];

  ngOnInit() {
    // this.getCourses();
  }

  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
        console.log('image:', this.cover);
      };
      reader.readAsDataURL(file);
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('form is invalid');
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
      return;
    }
    
    this.saveCourse(form);
  }
  clearForm(form: NgForm){
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }
  

  saveCourse(from: NgForm) {
    const formValue = from.value;
    

    const data = {
      ...formValue,
      image: this.cover,
      id: new Date().getTime()
    };

    this.courses = [...this.courses, data];
    this.setItem(this.courses);

    this.clearForm(from);
  }

  deleteCourse(course: any) {
    this.courses = this.courses.filter(course_item => course_item.id != course.id);
    this.setItem(this.courses);
  }
  setItem(data: any) {
    localStorage.setItem(StringEnum.STORGAGE_KEY, JSON.stringify(data));
  }
}
