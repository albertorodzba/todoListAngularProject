import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/auth/auth.service';
import { ModulesModule } from './modules/modules.module';
import { LayoutModule } from './layout/layout.module';

import { TodoItemsService } from './core/services/todoItems/todo-items.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,


    ModulesModule,
    LayoutModule

  ],
  providers: [{provide: 'IAuthService', useClass: AuthService},
  {provide: 'ITodoItemService', useClass: TodoItemsService}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
