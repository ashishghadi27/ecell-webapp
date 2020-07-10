import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  bData:BlogModel[]
  loading = false;
  trustedUrl;
  url = "";
  urlArray;
  

  constructor(private dataService: DatahandlerService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.dataService.getBlog().subscribe((data)=>{
      this.bData = data;
      this.url = this.bData[0].youtube;
      this.urlArray = this.url.split("/");
      this.url = "https://www.youtube.com/embed/" + this.urlArray[this.urlArray.length - 1];
      this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });


  }

}
