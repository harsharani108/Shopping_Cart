import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { CartAction } from '../../store/actions/cart.actions';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  
  products:Product[];
  quantity: number;

  constructor (private productService:ProductService, private router:Router, private cartStore: CartAction) {

  }

  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  addToCart(product) {
    console.log(this.quantity)
    this.cartStore.addToCart(product, this.quantity || 1)
  }

  getProductData() {     
     this.productService.getProducts().then(products => this.products = products)
  }

  ngOnInit() {
    this.getProductData()
  }

}