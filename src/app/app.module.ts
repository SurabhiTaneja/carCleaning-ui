import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { RegisterLoginFormComponent } from './register-login-form/register-login-form.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/index';

@NgModule({
  declarations: [
    AppComponent,
    MenuPanelComponent,
    RegisterLoginFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,
    AlertService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
