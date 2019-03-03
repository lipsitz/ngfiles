import { Component, OnInit ,Input, Output , EventEmitter} from '@angular/core';
import { IEvent } from '../../../shared/models/event.model';
@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
@Input() event:IEvent;
someProperty : any = "some Value";

getStartTimeStyle():any{
  if(this.event && this.event.time === '8:00 am') 
   return {color:'green', 'font-weight':'bold'}
  return {}
}
}
