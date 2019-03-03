import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes ,} from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component'
import { E404Component } from './errors/e404/e404.component'
import {EventRouteActivatorService } from './shared/services/event-route-activator/event-route-activator.service'
import {EventRouteDeactivatorService } from './shared/services/event-route-deactivator/event-route-deactivator.service'
import {EventListResolverService } from './shared/services/event-list-resolver/event-list-resolver.service' 
import { CreateSessionComponent} from './events/event-details/create-session/create-session.component'
const routes:Routes=[
  { path: 'events', component: EventListComponent,resolve:{events:EventListResolverService} },
  { path: 'events/new', component: CreateEventComponent , canDeactivate :['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent , canActivate:[EventRouteActivatorService] },
  { path : 'events/session/new',component: CreateSessionComponent },
  { path: '404', component: E404Component },
  { path: '',redirectTo:'/events', pathMatch:'full' },
  { path: 'user' , loadChildren: './user/user.module#UserModule'}
  

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
