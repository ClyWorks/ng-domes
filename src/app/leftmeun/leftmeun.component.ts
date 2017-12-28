import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leftmeun',
  templateUrl: './leftmeun.component.html',
  styleUrls: ['./leftmeun.component.css']
})
export class LeftmeunComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  nav(url:string){
      this.router.navigateByUrl(url)
  }
}
