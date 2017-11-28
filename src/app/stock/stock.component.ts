import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor() {
    this.stocks = [
      new Stock(1, "第一张股票", 1.99, 1.5, "这是我学习的第一张股票", ["IT", "互联网"]),
      new Stock(2, "第二张股票", 2.99, 2.5, "这是我学习的第二张股票", ["IT"]),
      new Stock(3, "第三张股票", 3.99, 1.5, "这是我学习的第三张股票", ["互联网"]),
      new Stock(4, "第四张股票", 4.99, 3.5, "这是我学习的第四张股票", ["IT", "互联网"]),
      new Stock(5, "第五张股票", 5.99, 2.5, "这是我学习的第五张股票", ["IT", "互联网"]),
    ];
  }

  ngOnInit() {
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public priec: number,
              public pinji: number,
              public msg: string,
              public shux: Array<string>) {

  }
}
