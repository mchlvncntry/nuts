import { Component, OnInit } from '@angular/core';
// @ts-ignore
import productData from '../../assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products: any = productData;

  constructor() {
    console.log('Reading local json files');
    console.log(productData);
  }

  ngOnInit() {
  }

}
