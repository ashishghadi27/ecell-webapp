import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams, Member} from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-council',
  templateUrl: './council.component.html',
  styleUrls: ['./council.component.css']
})
export class CouncilComponent implements OnInit {

  loading = true;

  tData: Teams[]
  mData: Member[]

  constructor(private dataService: DatahandlerService) { }

  ngOnInit() {

    this.dataService.getTeams().subscribe((data)=>{
      this.tData = data
    });

    this.dataService.getMenbers().subscribe((data)=>{
      this.mData = data
    });

  }

}
