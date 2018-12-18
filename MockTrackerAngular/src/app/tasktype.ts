export class TaskType {
    public TaskTypeID: number;
    public Name: string;
    public Description: string;

    constructor(newTasktype: TaskType)
    {
        this.TaskTypeID = newTasktype.TaskTypeID;
        this.Name = newTasktype.Name;
        this.Description = newTasktype.Description;
    }
}