import { Component, OnInit  } from '@angular/core';
import {EventService } from '../../shared/services/event/event.service'
import { ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from '../../shared/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
events :IEvent[];
  constructor(private eventService : EventService , private toastr :ToastrService , private activatedRoute:ActivatedRoute) {
   
   }

  ngOnInit() {
    //  this.eventService.getEvents().subscribe(events => { this.events = events})
    this.events = this.activatedRoute.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    this.toastr.error(eventName,eventName);
  }

  
}
