import { Component } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import {GetData} from '../services/GetData';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page extends GetData {

  constructor(public http: HttpClient){
    super(http);
  }  
}


