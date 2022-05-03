import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  products!: Product[];
  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
    this.getProducts();


  }

  public getProducts(){

    return this._productService.getAll().subscribe(
      data=>{
        this.products=data;

      });

  //   return this._productService.getAll().
  //  subscribe(data =>{
  //     this.products = data;






}
}
