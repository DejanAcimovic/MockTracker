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
  displayedColumns: string[] = ['No.', 'Task', 'Duration', 'Billable'];
  dataSource;

  jebemu: any[] = [];


  constructor(private timesheetService: TimesheetService) { }

  ngOnInit() {

    this.GetSheets();
    this.dataSource = this.sheets;
    this.GetTaskTypes();


  }

  GetSheets(): void {
    this.timesheetService.getTimeSheets().subscribe(sheets => this.sheets = sheets)

  }

  GetTaskTypes(): void {
    this.timesheetService.getTaskType()
        .subscribe(tasks => {
         this.tasktypes = tasks;              
         console.log(tasks);
    });
  }


}
