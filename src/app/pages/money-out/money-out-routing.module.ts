import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyOutPage } from './money-out.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyOutPageRoutingModule {}
