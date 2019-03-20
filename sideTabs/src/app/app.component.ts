import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GetData } from './services/GetData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends GetData {
  public appPages = [
    {
      title: 'New',
      url: '/tab1',
      icon: 'list-box'
    },
    {
      title: 'Active',
      url: '/tab2',
      icon: 'list-box'
    },
    {
      title: 'Resolved',
      url: '/tab3',
      icon: 'list-box'
    },
    {
      title: 'Closed',
      url: '/tab4',
      icon: 'list-box'
    }
  ];

  constructor(
    public http: HttpClient,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    super(http);
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
