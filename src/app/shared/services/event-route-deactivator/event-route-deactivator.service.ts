import { Injectable } from '@angular/core';
import { CreateEventComponent } from '../../../events/create-event/create-event.component';

@Injectable({
  providedIn: 'root'
})
export class EventRouteDeactivatorService {

  constructor() { }

  canDeactivate(component:CreateEventComponent){
    if(component.isDirty)
    return window.confirm('you not save the event')
    return true
}
}