import { TaskType } from './tasktype'

export class TimeSheet {
    public taskSheetId: number;
    public task: TaskType;
    public duration: number;
    public billable: boolean;
    public date: Date;

    constructor(taskSheetId, task, duration, billable, date) {
        this.taskSheetId = taskSheetId;
        this.task = task;
        this.duration = duration;
        this.billable = billable;
        this.date = date;
    }
}