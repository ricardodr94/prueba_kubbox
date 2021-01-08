import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';

//peticion Http

//servicios

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
