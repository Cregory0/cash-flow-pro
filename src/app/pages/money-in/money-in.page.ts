import { Component, OnInit } from '@angular/core';
import { FinancialGroup, FinancialItem } from '../../interfaces/Financial';
import { StorageService } from 'src/app/services/storage.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-money-in',
    templateUrl: './money-in.page.html',
    styleUrls: ['./money-in.page.scss'],
})
export class MoneyInPage implements OnInit {
    modalId = 'open-income-modal';
    storageId = 'allIncome';
    newCategory: FinancialGroup = {
        id: '',
        category: '',
        items: [],
        isNewItem: false,
        totalAmount: 0,
    };
    allIncome: FinancialGroup[] = [];
    totalIncome: number;
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
                this.allIncome = storedData;
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
