import { Component, OnInit } from '@angular/core';
import { AuthService} from '../shared/services/auth/auth.service'
import { ISession } from '../shared';
import { EventService} from '../shared/services/event/event.service'

declare var $ : any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
searchTerm:string ="";
foundSessions:ISession[];
  constructor(private authService:AuthService , private eventService:EventService) { }

  ngOnInit() {
   
  }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(sessions =>{
      this.foundSessions = sessions;     
    })
  }
}
