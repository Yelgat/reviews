import { Component, OnInit } from '@angular/core';

import { Review } from './review/review';

function httpGetAsync(theUrl, callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

@Component({
  selector: 'app-root-reviews',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yelgat-reviews';
  reviews: Review[];
  page: number;
  pageCount: number;
  pageNumbers: number[];
  location: string = window.location.pathname;

  ngOnInit() {
    const params = new URLSearchParams(location.search);
    const reviewPage = params.get('page') === null ? 1 : Number.parseInt(params.get('page'));
    httpGetAsync(`http://localhost:8080${window.location.pathname}?page=${reviewPage}`, (data) => {
      const body = JSON.parse(data);
      this.reviews = body.reviews;
      this.page = reviewPage;
      this.pageCount = body['page-count'];
      this.pageNumbers = [];
      for (let i = 1; i <= this.pageCount; i++) {
        this.pageNumbers.push(i);
      }
    });
  }
}
