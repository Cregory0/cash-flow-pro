import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TotalBarComponent } from 'src/app/components/total-bar/total-bar.component';
import { MoneyOutPageRoutingModule } from './money-out-routing.module';

import { MoneyOutPage } from './money-out.page';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyOutPageRoutingModule,
    SharedModule
  ],
  declarations: [MoneyOutPage]
})
export class MoneyOutPageModule {}
