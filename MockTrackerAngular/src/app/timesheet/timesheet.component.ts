import { Component, OnInit } from '@angular/core';
import { TimeSheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';
import { TaskType } from '../tasktype';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {

  sheets: TimeSheet[] = [];
  tasktypes: TaskType[] = [];
  constructor(private timesheetService: TimesheetService) { }

  ngOnInit() {
    this.GetSheets();
    this.GetTaskTypes();
  }

  GetSheets(): void {
    this.timesheetService.getTimeSheets().subscribe(sheets => {
      for (let i = 0; i < sheets.length; i++) {
        this.sheets.push(new TimeSheet(sheets[i].taskSheetId, sheets[i].task, sheets[i].duration, sheets[i].billable, sheets[i].date))
      }
    });
  }

  GetTaskTypes(): void {
    this.timesheetService.getTaskType()
      .subscribe(tasks => {
        for (let i = 0; i < tasks.length; i++)
          this.tasktypes.push(new TaskType(tasks[i].taskTypeId, tasks[i].name, tasks[i].description));
      });
  }


  AddTimeSheet(taskName, duration, billable): void {
    let temp = this.FindTaskByName(taskName)
    let timesheet = new TimeSheet(this.sheets.length, temp, duration, billable, new Date('12/18/2018'));

    this.timesheetService.addTimeSheet(timesheet).subscribe(timesheet => {
      this.sheets.push(timesheet);
    },
      (err) => {
        console.log(err)
      }
    );
  }

  FindTaskByName(taskName: string): TaskType {
    let arr = this.tasktypes;
    for (let i = 0; i < arr.length; i++)
      if (arr[i].Name === taskName)
        return arr[i];
  }

}
