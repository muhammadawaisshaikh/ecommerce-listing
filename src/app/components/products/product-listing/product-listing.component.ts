import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { DataSharingService } from '../../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  data: any = [];
  selectedCategory: any = {};

  constructor(
    private productsService: ProductsService,
    private dataSharing: DataSharingService
  ) { }

  ngOnInit(): void {
    // getting selected category from services that is live listening to sidebar
    this.dataSharing.category.subscribe(res => {
      this.selectedCategory = res;
      this.getProducts();
    })
  }

  // getting products from API
  getProducts() {
    this.productsService.getProducts(this.selectedCategory.slug, 25, 1).subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }

}
