import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import { OverlayEventDetail } from '@ionic/core/components';
import { FinancialGroup, FinancialItem } from 'src/app/interfaces/Financial';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    @ViewChild(IonModal) modal: IonModal;
    @Input('newCategory') newCategory: FinancialGroup;
    @Input('allItems') allItems: FinancialGroup[];
    @Input('modalId') modalId: string;
    @Input('storageId') storageId: string;

    newCategoryName: string;

    constructor(private storageService: StorageService) {}

    ngOnInit() {}

    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    confirm() {
        this.modal.dismiss(this.newCategory.category, 'confirm');
    }

    async onWillDismiss(event: Event) {
        const ev = event as CustomEvent<OverlayEventDetail<string>>;
        if (ev.detail.role === 'confirm') {
            const newCategoryId = uuidv4();
            this.newCategory = {
                id: newCategoryId,
                category: this.newCategoryName,
                items: [],
                isNewItem: false,
                totalAmount: 0,
            };
            this.allItems.push(this.newCategory);
            await this.storageService.set(this.storageId, this.allItems);

            this.newCategoryName = '';
        }
    }
}
