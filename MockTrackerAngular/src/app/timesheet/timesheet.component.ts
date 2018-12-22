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
  displayedColumns: string[] = ['No.', 'Task', 'Duration', 'Billable'];
  dataSource: any;

  sheets: TimeSheet[] = [];
  tasktypes: TaskType[] = [];
  constructor(private timesheetService: TimesheetService) { }

  ngOnInit() {
    this.GetSheets();
    this.GetTaskTypes();
    this.dataSource = this.timesheetService.getTimeSheets();
  }

  GetSheets(): void {
    this.timesheetService.getTimeSheets().subscribe(sheets => {
        this.sheets = sheets;
    });
  }

  GetTaskTypes(): void {
    this.timesheetService.getTaskType()
      .subscribe(tasks => {
        this.tasktypes = tasks;
      });
  }


  AddTimeSheet(taskName, duration, billable): void {
    let temp = this.FindTaskByName(taskName)
    let timesheet = new TimeSheet(this.sheets.length, temp, duration, billable, new Date('12/18/2018'));

    this.timesheetService.addTimeSheet(timesheet).subscribe(timesheet => {
      this.sheets.push(timesheet);
      //refresh table datasource
      this.dataSource.subscribe(newSheet => {
        this.dataSource = newSheet;
      });
    },
      (err) => {
        console.log(err)
      }
    );
  }

  FindTaskByName(taskName: string): TaskType {
    let arr = this.tasktypes;
    for (let i = 0; i < arr.length; i++)
      if (arr[i].name === taskName)
        return arr[i];
  }

}
