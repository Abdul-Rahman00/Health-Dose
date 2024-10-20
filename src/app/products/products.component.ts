import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  allProducts:Product[]=[];
  constructor(_productsService:ProductsService){

    _productsService.getAllProducts().subscribe( (data)=>
    this.allProducts = data);
  }
}
