import { TaskType } from './tasktype'

export class TimeSheet {
    taskSheetId: number;
    task: TaskType;
    duration: number;
    billable: boolean;
    date: Date;

    constructor(taskSheetId,task,duration,billable,date){
     this.taskSheetId=taskSheetId;
     this.task=task;
     this.duration=duration;
     this.billable=billable;
     this.date=date;

    }
}