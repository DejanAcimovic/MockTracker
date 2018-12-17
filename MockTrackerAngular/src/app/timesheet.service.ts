import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeSheet } from './timesheet';
import { TIMESHEETS } from './mock-timesheet';
import { TaskType } from './tasktype';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private timeSheetTasksUrl = '/api/timesheet/tasks';
  constructor(private http: HttpClient) {

  }

  getTimeSheets(): Observable<TimeSheet[]> {
    return of(TIMESHEETS)
  }

  getTaskType(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.timeSheetTasksUrl)
  }
}
