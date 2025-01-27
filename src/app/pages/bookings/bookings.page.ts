import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: false,
})
export class BookingsPage implements OnInit {

  bookings: Booking[] = [];
  filteredStudents: Booking[] = [];
  filteredTutors: Booking[] = [];
  searchTerm: string = '';
  filterType: string = 'all';

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getBookings().subscribe(
      res => {
        this.bookings = res;
        this.filterBookings();
      },
      err => {
        console.error(err);
      }
    );
  }

  filterBookings() {
    const term = this.searchTerm.toLowerCase();
    this.filteredStudents = this.bookings.filter(booking =>
      booking.student.first_name.toLowerCase().includes(term) ||
      booking.student.last_name.toLowerCase().includes(term)
    );
    this.filteredTutors = this.bookings.filter(booking =>
      booking.tutor.first_name.toLowerCase().includes(term) ||
      booking.tutor.last_name.toLowerCase().includes(term)
    );
  }
}