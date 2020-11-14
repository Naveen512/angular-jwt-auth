import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch: 'full'
},{
  path:'login',
  loadChildren:() => import('./login/login.module').then(_ => _.LoginModule),
  canActivate: [AuthGuard]
},{
  path:'dashboard',
  loadChildren:() => import('./dashboard/dashboard.module').then(_ => _.DashboardModule),
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
