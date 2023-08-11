import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TotalBarComponent } from '../components/total-bar/total-bar.component';
import { CategoryGroupComponent } from '../components/category-group/category-group.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [TotalBarComponent, ModalComponent, CategoryGroupComponent], // Declare the TotalBarComponent here
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [TotalBarComponent, ModalComponent, CategoryGroupComponent], // Export the component to be used in other modules
})
export class SharedModule {}