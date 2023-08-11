import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyInPageRoutingModule } from './money-in-routing.module';

import { MoneyInPage } from './money-in.page';
import { TotalBarComponent } from 'src/app/components/total-bar/total-bar.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { CategoryGroupComponent } from 'src/app/components/category-group/category-group.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyInPageRoutingModule,
    SharedModule
  ],
  declarations: [MoneyInPage]
})
export class MoneyInPageModule {}
