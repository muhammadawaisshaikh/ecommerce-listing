import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public category = new Subject<any>();

  constructor() { }

  setCategory(value: any) {
    this.category.next(value);
  }
}
