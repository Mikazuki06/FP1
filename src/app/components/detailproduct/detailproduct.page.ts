import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.page.html',
  styleUrls: ['./detailproduct.page.scss'],
})
export class DetailproductPage implements OnInit {

  constructor() { }
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  
  ngOnInit() {
  }

}
