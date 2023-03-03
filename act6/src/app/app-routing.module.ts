import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'newuser', component: NewuserComponent},
  {path: 'updateuser', component: UpdateuserComponent},
  {path: 'user', component: UserComponent},
  {path: '**', component: C404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
