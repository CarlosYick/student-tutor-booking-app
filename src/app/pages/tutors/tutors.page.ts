import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.services';
import { Tutor } from '../../models/tutor.model';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {

  tutors: Tutor[] = [];
  filteredTutors: Tutor[] = [];
  searchTerm: string = '';
  selectedSpeciality: string = '';
  specialities: string[] = [];

  constructor(private tutorService: TutorService) { }

  ngOnInit() {
    this.tutorService.getTutors().subscribe(
      res => {
        this.tutors = res;
        this.filteredTutors = res;
        this.specialities = [...new Set(res.map(tutor => tutor.speciality))];
      },
      err => {
        console.error(err);
      }
    );
  }

  filterTutors() {
    const term = this.searchTerm.toLowerCase();
    this.filteredTutors = this.tutors.filter(tutor =>
      (tutor.first_name.toLowerCase().includes(term) || tutor.last_name.toLowerCase().includes(term)) &&
      (this.selectedSpeciality ? tutor.speciality === this.selectedSpeciality : true)
    );
  }
}