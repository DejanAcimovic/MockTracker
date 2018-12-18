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
  newTimeSheet:TimeSheet;
  constructor(private timesheetService: TimesheetService) { }

  ngOnInit() {
    this.GetSheets();
    this.GetTaskTypes();
  }

  GetSheets(): void {
    this.timesheetService.getTimeSheets().subscribe(sheets =>{
      for(let i =0;i<sheets.length;i++){
        this.sheets.push(new TimeSheet(sheets[i].taskSheetId,sheets[i].task,sheets[i].duration,sheets[i].billable,sheets[i].date))
      }
    console.log(this.sheets);
    });
  }

  GetTaskTypes(): void {
    this.timesheetService.getTaskType()
        .subscribe(tasks => {
         this.tasktypes = (tasks as TaskType[]);              
         console.log(this.tasktypes);
    });
  }
  
  AddTimeSheet(timesheet: TimeSheet):void{
    timesheet.taskSheetId=this.sheets.length;
    timesheet.date=new Date('12/18/2018');
  this.timesheetService.addTimeSheet(timesheet).subscribe(timesheet=>{this.sheets.push(timesheet);
    console.log(timesheet);
  });
  }
}
