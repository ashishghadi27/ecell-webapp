import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { Event } from 'src/app/home/home-model';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  bData:Event
  loading = false;
  id:string;
  trustedUrl;
  url = "";
  urlArray;

  constructor(private dataService: DatahandlerService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getEventData(this.id).subscribe((data)=>{
      this.bData = data;
      this.url = this.bData.youtube;
      this.urlArray = this.url.split("/");
      this.url = "https://www.youtube.com/embed/" + this.urlArray[this.urlArray.length - 1];
      this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });
  }

}
