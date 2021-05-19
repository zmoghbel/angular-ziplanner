import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { from, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService{
    private apiUrl = "http://localhost:5001/todos";

    constructor( private http: HttpClient){}

    /*Todos: Array<Todo> = [
        {
          id: 1,
          title: 'Work on Zipplaner App',
          date: '2021-03-03',
          time: '13:00',
          description: 'this is first test',
          isDone: true,
          alarmOn: true
        },
        {
            id: 2,
            title: 'Learn English',
            date: '2021-03-03',
            time: '14:00',
            description: '',
            isDone: false,
            alarmOn: false
        }
      ];*/

    getTodos() : Observable<Todo[]>{
        return this.http.get<Todo[]>(this.apiUrl);
    }
}

export class Todo{
    public id: number;
    public title: string;
    public date: string;
    public time: string;
    public description: string;
    public isDone: boolean = false;
    public alarmOn: boolean = false;

    constructor(id: number, title: string, date: string, time: string, isDone: boolean, alarmOn: boolean){
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.isDone = isDone;
        this.alarmOn = alarmOn;
    }
}