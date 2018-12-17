import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeSheet } from './timesheet';
import { TIMESHEETS, TASKTYPES } from './mock-timesheet';
import { TaskType } from './tasktype';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {


  constructor() { }

  getTimeSheets(): Observable<TimeSheet[]> {
     return of(TIMESHEETS)
  }

  getTaskType(): Observable<TaskType[]> {
    return of(TASKTYPES)
 }
}
