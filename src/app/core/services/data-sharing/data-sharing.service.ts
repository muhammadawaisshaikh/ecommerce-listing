import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Location } from '@angular/common'; 

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public category = new Subject<any>();

  constructor(
    private location: Location
  ) { }

  setCategory(value: any) {
    this.category.next(value);
    this.location.replaceState("/products/product-listing/"+value.name);
  }
}
