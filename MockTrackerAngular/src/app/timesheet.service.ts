import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeSheet } from './timesheet';
import { TIMESHEETS } from './mock-timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {


  constructor() { }

  getTimeSheets(): Observable<TimeSheet[]> {
     return of(TIMESHEETS)
  }
}
