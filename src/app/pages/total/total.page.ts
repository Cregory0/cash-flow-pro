import { Component, OnInit } from '@angular/core';
import { FinancialGroup } from 'src/app/interfaces/Financial';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-total',
    templateUrl: './total.page.html',
    styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {
    totalOutcome: number = 0;
    totalIncome: number = 0;
    testValid: boolean = false;

    constructor(private storageService: StorageService) {}

    ionViewWillEnter() {
        this.getTotals();
    }

    ngOnInit() {}

    calculateTotals() {
        return this.totalIncome - this.totalOutcome;
    }

    async getTotals() {
        try {
            const storedIncome = await this.storageService.get('allIncome');
            const storedOutcome = await this.storageService.get('allOutcome');

            if (storedIncome) {
                this.totalIncome = storedIncome.reduce(
                    (acc: number, obj: FinancialGroup) => acc + obj.totalAmount,
                    0
                );
            }

            if (storedOutcome) {
                this.totalOutcome = storedOutcome.reduce(
                    (acc: number, obj: FinancialGroup) => acc + obj.totalAmount,
                    0
                );
            }
        } catch (error) {
            console.error(error);
        }
    }
}
