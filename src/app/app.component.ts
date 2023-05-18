import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  home = '';

  appPages = [
    { title: this.home, url: '/folder/home', icon: 'home' },
  ];

  constructor(
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('en');

    this.translate.get('side_menu').subscribe(menu => {
      this.appPages = [
        { title: menu['home'], url: '/home', icon: 'home' },
        { title: menu['dialer'], url: '/dialer', icon: 'call' },
        { title: menu['hours'], url: '/hours', icon: 'time' }
      ];
    }
    );
  }
}
