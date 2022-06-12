import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private api:NewsapiService) { } // Taking data from Newsapiservices method

  // Display data of headline
  topHeadlinesData:any = [];
  ngOnInit(): void {
    this.api.topHeadline().subscribe((result)=>{
     this.topHeadlinesData = result.articles; // Storing data from articles in topHeadlinesData Array
    })
  }

}
