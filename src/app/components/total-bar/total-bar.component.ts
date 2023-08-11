import { Component, OnInit, Input } from '@angular/core';
import { FinancialGroup, FinancialItem } from 'src/app/interfaces/Financial';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-total-bar',
    templateUrl: './total-bar.component.html',
    styleUrls: ['./total-bar.component.scss'],
})
export class TotalBarComponent implements OnInit {
    @Input('storageId') storageId: string;
    totalValue: string | undefined;

    constructor(private storageService: StorageService) {}

    ngOnInit() {
        this.fetchInitialData();
        this.subscribeToObservable();
    }

    private fetchInitialData() {
        this.storageService
            .get(this.storageId)
            .then((data) => {
                this.totalValue = this.calculateTotalValue(data);
            })
            .catch((error) => {
                console.error('Error getting data from storage', error);
            });
    }

    private subscribeToObservable() {
        this.storageService.getObservable(this.storageId).subscribe({
            next: (data: FinancialGroup[]) => {
                this.totalValue = this.calculateTotalValue(data);
            },
            error: (error) => {
                console.error('Error getting data from storage', error);
            },
        });
    }

    private calculateTotalValue(data: FinancialGroup[]) {
        if (data === null) {
            return;
        }
        return data
            .reduce((acc: number, obj: FinancialGroup) => acc + obj.totalAmount, 0)
            .toFixed(2);
    }
}
