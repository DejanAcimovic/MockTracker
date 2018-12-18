import { TaskType } from './tasktype'

export class TimeSheet {
    TimesheetID: number;
    Task: TaskType;
    Duration: number;
    Billable: boolean;
    TimeSheetDate: Date;

}