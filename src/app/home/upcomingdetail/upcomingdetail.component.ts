import { Component, OnInit } from '@angular/core';
import { Upcoming } from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-upcomingdetail',
  templateUrl: './upcomingdetail.component.html',
  styleUrls: ['./upcomingdetail.component.css']
})
export class UpcomingdetailComponent implements OnInit {

  bData:Upcoming
  loading = false;
  upId;
  regEnabled = false;

  constructor(private dataService: DatahandlerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.upId = this.route.snapshot.paramMap.get('id');
    this.dataService.getUpcomingData(this.upId).subscribe((data)=>{
      this.bData = data;
      this.bData.id = this.upId;
      if(this.bData.link === 'website'){
        this.regEnabled = true;
      }
      console.log(this.regEnabled);
      console.log(this.upId);
      console.log(this.bData.link);
    });
  }

}
