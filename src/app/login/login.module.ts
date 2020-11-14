import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { LoginRouteModules } from './login-route.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        LoginRouteModules
    ]
})
export class LoginModule{}