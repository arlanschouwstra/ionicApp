import { Component } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { GetData } from '../services/GetData';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page extends GetData {
  
  constructor(public http: HttpClient){
   super(http);
  }
}
