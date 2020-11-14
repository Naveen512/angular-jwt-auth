import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl:'dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    userName:string = ''
    constructor(private authService:AuthService){}
    ngOnInit(): void {
        this.authService.userInfo.subscribe(value => {
            if(value){
                this.userName = value.username;
            }
        })
    }

}