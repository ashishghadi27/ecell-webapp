import { Component, OnInit } from '@angular/core';
import { Upcoming, Event } from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  uData:Upcoming[]
  eData:Event[]
  flag:boolean

  constructor(private dataService: DatahandlerService) { }

  ngOnInit() {
    this.dataService.getUpcoming().subscribe((data)=>{
      this.uData = data
      if(this.uData.length > 0) {
        this.flag = true;
      }else{
        this.flag = false;
      }
    });

    this.dataService.getEvents().subscribe((data)=>{
      this.eData = data
    });
  }

}
