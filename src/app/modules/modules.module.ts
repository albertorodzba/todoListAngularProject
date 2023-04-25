import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/pages/todo-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    TodoItemComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[],
  exports:[

  ]
})
export class ModulesModule { }
