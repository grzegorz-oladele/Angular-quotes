import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
