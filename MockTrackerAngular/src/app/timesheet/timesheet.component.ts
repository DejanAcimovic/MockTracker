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
  newTimeSheet: TimeSheet;
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
      // console.log(this.sheets);
    });
  }

  GetTaskTypes(): void {
    this.timesheetService.getTaskType()
      .subscribe(tasks => {
        this.tasktypes = (tasks as TaskType[]);
        // console.log(this.tasktypes);
      });
  }


  AddTimeSheet(taskName, duration, billable): void {
    console.log(duration);
    //find task
    let newTask;
    for (let taskT of this.tasktypes)
      if (taskT.Name === taskName)
        newTask = new TaskType(taskT);

    let timesheet = new TimeSheet(this.sheets.length, newTask, duration, billable, new Date('12/18/2018'));
     console.log(newTask);
    // timesheet.date = new Date('12/18/2018');
    this.timesheetService.addTimeSheet(timesheet).subscribe(timesheet => {
      this.sheets.push(timesheet);
      // console.log(timesheet);
    });
  }

}
