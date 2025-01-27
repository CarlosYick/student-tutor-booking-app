import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.page.html',
  styleUrls: ['./tutor.page.scss'],
  standalone: false,
})
export class TutorPage implements OnInit {

  tutorId: string = '';
  tutor: any;

  constructor(
  ) { }

  ngOnInit() {
    if (history.state.tutor) {
      this.tutor = history.state.tutor;
    } else {
      console.warn('No tutor object found in the state');
    }
  }

}
