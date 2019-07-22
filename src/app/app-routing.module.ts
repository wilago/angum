import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChooseProjectComponent } from './components/choose-project/choose-project.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { AccessCouponComponent } from './components/access-coupon/access-coupon.component';
import { ShowCouponComponent } from './components/show-coupon/show-coupon.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'projects', component: ChooseProjectComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'access-coupon', component: AccessCouponComponent },
  { path: 'show-coupon', component: ShowCouponComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
