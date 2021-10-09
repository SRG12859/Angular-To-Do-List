import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from "./Components/nav/nav.component";
import { AddToDoComponent } from './Components/home/add-to-do/add-to-do.component';
import { DisplayTodoComponent } from './Components/home/display-todo/display-todo.component';
import { DisplaySingleTodoComponent } from './Components/home/display-todo/display-single-todo/display-single-todo.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HowItsMadeComponent } from './Components/how-its-made/how-its-made.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AddToDoComponent,
    DisplayTodoComponent,
    DisplaySingleTodoComponent,
    PageNotFoundComponent,
    HowItsMadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
