import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-coupon',
  templateUrl: './show-coupon.component.html',
  styleUrls: ['./show-coupon.component.scss']
})
export class ShowCouponComponent implements OnInit {
  urlQR = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

    this.route.queryParams
      .subscribe((params: any) => {
        console.log('params_generate url: ', params);
        this.urlQR = params.url;
      });

  }

  ngOnInit() { }

}
