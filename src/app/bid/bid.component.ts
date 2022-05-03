import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  products:Product=new Product();

  constructor(private _activatedRoute:ActivatedRoute,
    private _productService: ProductService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      ()=>{
        this.getProductInfo();
      }
    )

  }

  getProductInfo(){
    const id:number=+this._activatedRoute.snapshot.paramMap.get('id')!;
    this._productService.getDetails(id).subscribe(
      data=>{
        this.products=data;
      }
    )
  }
}












  // products!: Product[];

  // constructor(private pService:ProductService,
  //   private _activatedRoute:ActivatedRoute,
  // ) { }

//   ngOnInit(): void {
//     this.getProducts();
//     // this._activatedRoute.paramMap.subscribe(
//     //   ()=>{
//     //     this.getProductInfo();
//     //   }
//     // )
//   }

//   public getProducts(){

//     return this.pService.getAll().subscribe(
//       data=>{
//         this.products=data;

//       });

// }
// // getProductInfo(){
// //   const id:number=+this._activatedRoute.snapshot.paramMap.get('id')!;
// //   this.pService.getDetails(id).subscribe(
// //     data=>{
// //       this.products=data;
// //     }
// //   )
// // }
// }

