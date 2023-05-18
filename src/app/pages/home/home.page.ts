import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isOnline = true;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const status = await Network.getStatus();
    this.isOnline = status.connected;

    Network.addListener('networkStatusChange', (status) => {
      this.isOnline = status.connected;
    });

  }

}
