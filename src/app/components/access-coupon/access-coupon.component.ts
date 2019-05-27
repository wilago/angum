import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router } from '@angular/router';


@Component({
  selector: 'app-access-coupon',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './access-coupon.component.html',
  styleUrls: [
    '../../../../node_modules/simple-keyboard/build/css/index.css',
    './access-coupon.component.scss',
  ]
})
export class AccessCouponComponent implements AfterViewInit {
  value = '';
  keyboard: Keyboard;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      layout: {
        default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}'],
      },
      theme: 'hg-theme-default hg-layout-numeric numeric-theme',
      buttonTheme: [
        {
          class: 'hg-send',
          buttons: '{enter}'
        }
      ],
      display: {
        '{bksp}': 'Borrar',
        '{enter}': 'Envíar',
      },

      onChange: input => this.onChange(input),
      onKeyPress: buttons => this.onKeyPress(buttons)
    });
  }

  onChange = (input: string) => {
    console.log('Input changed: ', input);
    if (input.length <= 10) {
      this.value = input;
    }
  }

  onKeyPress = (button: string) => {
    console.log('Button pressed: ', button);
    if (button === '{enter}') {
      if (this.value.length >= 10) {
        this.router.navigate(['/show-coupon']);
      } else {
        alert('Completa el número de teléfono');
      }
    }
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  public onNext() {
    this.router.navigate(['/show-coupon']);
  }



}
