import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products!: Product[];


  constructor(private productService: ProductService,) { }

  public onGetProducts(){

    return this.productService.getAll().
   subscribe(data =>{
      this.products = data;

      console.log(data);
    });
  }

  ngOnInit(): void {
    this.onGetProducts();
  }

}
