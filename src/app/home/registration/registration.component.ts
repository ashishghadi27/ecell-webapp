import { Component, OnInit } from '@angular/core';
import { Upcoming, Years, Division } from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loading = false;

  uData:Upcoming;
  yData:Years[];
  dData: Division[];

  id:string;
  fname:string
  lname:string
  email:string
  contact:string
  class:string
  division:string
  rollno:string

  buttonText: string = "Register"

  constructor(private dataService: DatahandlerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    this.getYears();
    this.getDivs();
  }

  getData(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getUpcomingData(this.id).subscribe((data)=>{
      this.uData = data;
    });

  }

  getYears(){
    this.dataService.getYears().subscribe((data)=>{
      this.yData = data;
    });
  }

  getDivs(){
    this.dataService.getDivisions().subscribe((data)=>{
      this.dData = data;
    });
  }

  register(){
  
    console.log("HERE");
     
      const data = {
        fname:this.fname,
        lname:this.lname,
        email:this.email,
        contact:this.contact,
        class:this.class,
        division:this.division,
        rollno:this.rollno,
  
      };
      console.log("before register");
      this.dataService.register (this.id, data)
      this.buttonText = 'Registered!'
      setTimeout(() => this.buttonText = "Register", 2000)
      console.log("after register");
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.contact = ''
      this.class = ''
      this.division = ''
      this.rollno = ''
      
      
  
    
  }

}
