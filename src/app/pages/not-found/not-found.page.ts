import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

    joke: any;

    constructor(private http:HttpClient) { }

    ngOnInit() {
        this.getNewJoke();

    }

    getNewJoke() {
        this.http.get('https://api.chucknorris.io/jokes/random').subscribe( result => {
          this.joke = result;
        })
      }

}
