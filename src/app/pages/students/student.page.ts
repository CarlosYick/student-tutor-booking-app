import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false,
})
export class StudentPage implements OnInit {

  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchTerm: string = '';

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      res => {
        this.students = res;
        this.filteredStudents = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  filterStudents() {
    const term = this.searchTerm.toLowerCase();
    this.filteredStudents = this.students.filter(student =>
      student.first_name.toLowerCase().includes(term) ||
      student.last_name.toLowerCase().includes(term)
    );
  }
}