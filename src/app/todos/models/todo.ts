export class Todo{
    public id?: number;
    public title: string;
    public date: string;
    public time: string;
    public description: string;
    public isDone: boolean = false;
    public alarmOn: boolean = false;
    
    /*
    constructor(id: number, title: string, date: string, time: string, isDone: boolean, alarmOn: boolean){
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.isDone = isDone;
        this.alarmOn = alarmOn;
    }*/
}