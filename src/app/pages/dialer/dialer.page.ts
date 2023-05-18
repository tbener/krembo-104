import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialer',
  templateUrl: './dialer.page.html',
  styleUrls: ['./dialer.page.scss'],
})
export class DialerPage implements OnInit {

  users: { name: any; string: number; picture: {thumbnail: string}; email: string }[] = [];

  contacts = [
    {
      name: 'Tal',
      number: '0544424442',
      whatsapp: '0544424442',
      gender: 'male'
    },
    {
      name: 'Keren',
      number: '0528309020',
      whatsapp: '0528309020',
      gender: 'neutral'
    },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRandomUsers();
  }

  getRandomUsers() {
    this.http.get('https://randomuser.me/api/?results=5').subscribe((result: any) => {
      console.log('results: ', result);
      this.users = result['results'];
    });
  }



}
