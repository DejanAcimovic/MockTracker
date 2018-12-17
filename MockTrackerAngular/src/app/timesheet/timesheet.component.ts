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
  tasktypes: TaskType[];
  //dataSource;

  constructor(private timesheetService: TimesheetService) { }

  ngOnInit() {

    this.GetSheets();
    //this.dataSource = this.sheets;
    this.GetTaskTypes();

  }

  GetSheets(): void {
    this.timesheetService.getTimeSheets().subscribe(sheets => this.sheets = sheets)

  }

  GetTaskTypes(): void {
    this.timesheetService.getTaskType()
        .subscribe(tasks => {
         this.tasktypes = (tasks as TaskType[]);              
         console.log(this.tasktypes);
    });
  }

  // GetTaskTypes(): void {
  //   this.timesheetService.getTaskType()
  //       .subscribe((tasks: any) => {
  //        this.tasktypes = tasks;              
  //        console.log(this.tasktypes);
  //   });
  // }
  


}
