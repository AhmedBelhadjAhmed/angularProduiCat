import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  date!:Date
  time!:string
  ngOnInit(): void {
    setInterval(()=>{this.date=new Date();
   
    },1000);
  }

}
