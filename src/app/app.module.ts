import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './modules/auth/services/auth.service';
import { ModulesModule } from './modules/modules.module';
import { LayoutModule } from './layout/layout.module';


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
  providers: [{provide: 'IAuthService', useClass: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
