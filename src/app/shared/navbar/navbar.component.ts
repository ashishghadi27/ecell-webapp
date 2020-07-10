import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/home/datahandler.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeModel } from 'src/app/home/home-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeData: Observable<HomeModel[]>
  hData:HomeModel[]

  constructor(private dataService: DatahandlerService) { }

  ngOnInit() {

    this.dataService.getHomeData().subscribe((data)=>{
      this.hData = data
      console.log(data)
  });
    
    
  }

}
