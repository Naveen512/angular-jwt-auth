import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosService{
    constructor(private http:HttpClient){}

    getTodos(){
        return this.http.get("http://localhost:3000/todos");
    }
}