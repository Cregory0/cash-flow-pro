import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyInPage } from './money-in.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyInPageRoutingModule {}
