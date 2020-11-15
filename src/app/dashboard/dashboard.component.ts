import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TodosService } from '../services/todos.service';

@Component({
    templateUrl:'dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    userName:string = '';
    todos:any;
    constructor(private authService:AuthService,
        private todosService:TodosService){}
    ngOnInit(): void {
        this.authService.userInfo.subscribe(value => {
            if(value){
                this.userName = value.username;
            }
        })
        this.loadTodos();
    }

    loadTodos(){
        this.todosService.getTodos()
        .subscribe(
            (value) => {
                this.todos = value;
            },
            (error) => {
                console.log(error)
                console.log('failted to load todos')
            }
        )
    }

}