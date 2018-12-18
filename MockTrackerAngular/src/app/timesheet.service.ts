import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeSheet } from './timesheet';
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
  constructor(private http: HttpClient) {}

  getTimeSheets(): Observable<TimeSheet[]> {
    return this.http.get<TimeSheet[]>("/api/timesheet")
  }

  getTaskType(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.timeSheetTasksUrl)
  }

  addTimeSheet(timesheet: TimeSheet): Observable<TimeSheet> {
    //console.log(JSON.stringify(timesheet));
    return this.http.post<TimeSheet>('/api/timesheet', JSON.stringify(timesheet), httpOptions);
    
  }
}
