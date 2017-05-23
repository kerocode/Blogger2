import { Component, OnInit } from '@angular/core';
const CiscoSpark = require('ciscospark');
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  spark;
  constructor() { }

  ngOnInit() {
    this.spark = CiscoSpark.init({
      config: {
        credentials: {
          authorizeUrl: ''
        }
      }
    });
  }

}
