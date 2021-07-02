import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  selectedCategory: any = "";

  categories: any = [
    { id: 1, name: "Beverages", slug: "beverages" },
    { id: 2, name: "Frozen", slug: "frozen" },
  ]

  constructor(
    private dataSharing: DataSharingService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectCategory(this.categories[0])
    }, 1000);
  }

  selectCategory(item: any) {
    this.selectedCategory = item;
    this.dataSharing.setCategory(this.selectedCategory);
  }

}
