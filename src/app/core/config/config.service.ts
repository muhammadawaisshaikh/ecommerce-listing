import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  access_key: string = environment.access_key;
  base_url: string = environment.base_url;

  constructor() { }
}
