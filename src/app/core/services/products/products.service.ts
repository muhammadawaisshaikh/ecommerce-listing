import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(categorySlug: string, perPage: number, page: number) {
    return this.http.get(`${environment.base_url}/products?categorySlug=${categorySlug}&per_page${perPage}&page${page}`);
  }
}