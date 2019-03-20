import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetData} from '../services/GetData'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page extends GetData {

  constructor(public http: HttpClient){
    super(http);
  }
}
