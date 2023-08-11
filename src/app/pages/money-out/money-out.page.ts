import { Component, OnInit } from '@angular/core';
import { FinancialGroup, FinancialItem } from '../../interfaces/Financial';
import { StorageService } from 'src/app/services/storage.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-money-out',
    templateUrl: './money-out.page.html',
    styleUrls: ['./money-out.page.scss'],
})
export class MoneyOutPage implements OnInit {
    modalId = 'open-outcome-modal';
    storageId = 'allOutcome';
    newCategory: FinancialGroup = {
        id: '',
        category: '',
        items: [],
        isNewItem: false,
        totalAmount: 0,
    };
    allOutcome: FinancialGroup[] = [];
    totalOutcome: number;
    selectedItem: FinancialItem | null = null;

    constructor(
        private storageService: StorageService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    async ngOnInit() {
        await this.getDataFromStorage();
    }

    async getDataFromStorage() {
        try {
            const storedData = await this.storageService.get(this.storageId);
            if (storedData) {
                this.allOutcome = storedData;
            }
        } catch (error) {
            console.error(
                'Error while retrieving data from localStorage:',
                error
            );
        } finally {
            this.changeDetectorRef.detectChanges();
        }
    }
}