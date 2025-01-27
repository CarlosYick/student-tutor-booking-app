import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false,
})
export class StudentPage implements OnInit {

  student: { id: string; first_name: string; last_name: string; date_of_birth: string; address: string; } | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if (history.state.student) {
      this.student = history.state.student;
    } else {
      console.warn('No student object found in the state');
    }
  }

}
