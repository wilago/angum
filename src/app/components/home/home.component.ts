import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySlideImages: any;
  myCarouselImages: any;
  mySlideOptions: any;
  myCarouselOptions: any;
  constructor() { }

  ngOnInit() {
    this.mySlideImages = [10, 11, 12].map((i) => `https://picsum.photos/100?image=${i}`);

    this.mySlideOptions = {
      items: 2,
      dots: true,
      nav: true,
      margin: 10,
      width: '200px'
    };

  }

}
