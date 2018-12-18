export class TaskType {
    public taskTypeId: number;
    public name: string;
    public description: string;

    constructor(id:number, name:string, desc:string)
    {
        this.taskTypeId = id;
        this.name = name;
        this.description = desc;
    }
}