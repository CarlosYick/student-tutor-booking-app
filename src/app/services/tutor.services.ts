import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Tutor } from '../models/tutor.model';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private apiUrl = 'https://test.worldsacross.com/api/tutors';

  constructor(private http: HttpClient) { }

  getTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.apiUrl).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError('An error occurred while fetching data. Please try again later.');
  }
}