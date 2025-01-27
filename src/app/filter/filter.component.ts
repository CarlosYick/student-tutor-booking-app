import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() filterEvent = new EventEmitter<string>();

  applyFilter(filterValue: string) {
    this.filterEvent.emit(filterValue);
  }
}

