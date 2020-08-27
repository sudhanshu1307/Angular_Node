import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.css'],
  providers: [NgbCarouselConfig]
})
export class WebinarsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    autoplay: true,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
