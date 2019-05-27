import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChooseProjectComponent } from './components/choose-project/choose-project.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { AccessCouponComponent } from './components/access-coupon/access-coupon.component';
import { ShowCouponComponent } from './components/show-coupon/show-coupon.component';

// import { OwlModule } from 'ngx-owl-carousel';
// import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ChooseProjectComponent,
    ProjectComponent,
    AccessCouponComponent,
    ShowCouponComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FlexLayoutModule,
    AppRoutingModule
    // OwlModule,
    // DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
