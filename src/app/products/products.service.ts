import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _Httpclient:HttpClient) {}

  getAllProducts():Observable<Product[]>{
    return this._Httpclient.get<Product[]>("http://localhost:3000/products")
  }
}
