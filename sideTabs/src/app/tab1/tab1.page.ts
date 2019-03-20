import { Component } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { GetData } from '../services/GetData';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page extends GetData {
  constructor(public http: HttpClient){
    super(http);
  }
}