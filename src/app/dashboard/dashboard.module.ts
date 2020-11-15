import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TodosService } from '../services/todos.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        DashboardRoutingModule,
        CommonModule
    ],
    declarations:[
        DashboardComponent
    ],
    providers:[
        TodosService
    ]
})
export class DashboardModule {}
