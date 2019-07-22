import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderComponent } from '../loader/loader.component';


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
  dialogRef: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog) {

    this.route.queryParams.subscribe((params: any) => {
      console.log('params: ', params);
    });

  }

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
        this.getCode();
      } else {
        alert('Completa el número de teléfono');
      }
    }
  }

  private onShowLoader() {
    this.dialogRef = this.dialog.open(LoaderComponent, {
      height: '200px',
      width: '150px',
    });
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  private getCode() {
    this.onShowLoader();
    this.apiService.getCode().subscribe((code: string) => {
      console.log('Response_code: ', code);
      this.dialogRef.close();
      this.router.navigate(['/show-coupon']);
    });
  }

  public onNext() {
    console.log('Next');
    // this.router.navigate(['/show-coupon']);
  }

  public onGoToShowcupon() {
    this.apiService.getCode().subscribe((code: string) => {
      console.log('Response_code: ', code);
      this.router.navigate(['/show-coupon']);
    });
  }



}
