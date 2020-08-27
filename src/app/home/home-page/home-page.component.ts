import { Component, OnInit } from '@angular/core';
import { HomeModel, BlogModel, Upcoming } from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';



@Component({
  
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  val: 300

  loading = true;
  regEnabled = false;

  upDesc;
  upTitle;
  upLink;
  upId;
  upImage;

  hData:HomeModel[]
  bData:BlogModel[]
  uData:Upcoming[]
  

  constructor(private dataService: DatahandlerService) {

   }

  ngOnInit() {

    this.dataService.getHomeData().subscribe((data)=>{
      this.hData = data
    });

    this.dataService.getBlog().subscribe((data)=>{
      this.bData = data
    });

    this.dataService.getUpcoming().subscribe((data)=>{
      this.uData = data
      this.upId = data[0].id;
      this.upTitle = data[0].title;
      this.upDesc = data[0].description;
      this.upImage = data[0].image;
      if(this.uData[0].link === 'website'){
        this.regEnabled = true;
      }
      else{
        this.upLink = data[0].link
      }
    });

  }


}
