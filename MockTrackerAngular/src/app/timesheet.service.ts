import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeSheet } from './timesheet';
import { TIMESHEETS, TASKTYPES } from './mock-timesheet';
import { TaskType } from './tasktype';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

private timeSheetUrl='co'
  constructor(private http:HttpClient) { 
     
  }

  getTimeSheets(): Observable<TimeSheet[]> {
     return of(TIMESHEETS)
  }

  getTaskType(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.timeSheetUrl)
 }
}
