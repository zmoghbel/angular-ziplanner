import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { from, Observable } from "rxjs";

const httpOptions = {
    headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
    }),
};

@Injectable({
    providedIn: 'root'
})
export class TodoService{
    private apiUrl = "http://localhost:5001/todos";

    constructor( private http: HttpClient){}

    getTodos() : Observable<Todo[]>{
        return this.http.get<Todo[]>(this.apiUrl);
    }

    deleteTodo(todo : Todo) : Observable<Todo>{
        const url = `${this.apiUrl}/${todo.id}`;
        return this.http.delete<Todo>(url);
    }

    updateTodo(todo : Todo): Observable<Todo>{
        const url = `${this.apiUrl}/${todo.id}`;
        return this.http.put<Todo>(url, todo, httpOptions);
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