import { TimeSheet } from './timesheet';
import { TaskType } from './tasktype';
export const TASKTYPES: TaskType[] = [
  { TaskTypeID: 1, Name: 'Programming',Description:""},
  { TaskTypeID: 2, Name: 'Q/A',Description:""},
  { TaskTypeID: 3, Name: 'Meeting' ,Description:""},
  { TaskTypeID: 4, Name: 'Teaching',Description:"" }


];

export const TIMESHEETS: TimeSheet[] = [
  { TimesheetID: 1, Task:TASKTYPES[0],TimeSheetDate:new Date('1/1/2018'),Duration:1,Billable:true},
  { TimesheetID: 2, Task:TASKTYPES[1],TimeSheetDate:new Date('1/1/2018'),Duration:2,Billable:true },
  { TimesheetID: 3,Task:TASKTYPES[2],TimeSheetDate:new Date('1/1/2018'),Duration:3,Billable:false },
  { TimesheetID: 4, Task:TASKTYPES[3],TimeSheetDate:new Date('1/1/2018'),Duration:2,Billable:true },
  

];
