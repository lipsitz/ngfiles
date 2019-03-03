import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {AppRoutingModule } from './app-routing.module'
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { E404Component } from './errors/e404/e404.component';
import {AuthService } from './shared/services/auth/auth.service'
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  JQ_TOKEN ,
  CollapsibleWellComponent,
  simpleModalComponent,
  ModalTriggerDirective,
} from'./common/index'
let jQuery = window['$'];
declare var $ : any;

import { 
  SessionListComponent,
  CreateSessionComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  UpvoteComponent,
  EventService,
  EventRouteActivatorService,
  EventRouteDeactivatorService,
  EventListResolverService,
  VoterService,
  locationValidator

} from './events/index';
import {DurationPipe} from './shared/index';





@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    E404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    simpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    locationValidator,
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut:800,
        positionClass:'toast-bottom-right',
        preventDuplicates:false,
      }
    )
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventRouteDeactivatorService,
    EventListResolverService,
    AuthService,
    VoterService,
    {provide: 'canDeactivateCreateEvent',useValue : checkDirtyState},
    {provide: JQ_TOKEN, useValue : jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('you not save the event')
  return true
}