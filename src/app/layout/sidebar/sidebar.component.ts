import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories: any = [
    { id: 1, name: "Beverages", slug: "beverages" },
    { id: 2, name: "Frozen", slug: "frozen" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
