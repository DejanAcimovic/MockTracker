export class TaskType {
    public TaskTypeID: number;
    public Name: string;
    public Description: string;

    constructor(id:number, name:string, desc:string)
    {
        this.TaskTypeID = id;
        this.Name = name;
        this.Description = desc;
    }
}