import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {

  @Input()
  runing: number = 0;

  stars: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i>this.runing)
    }
  }

}
