import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { FinancialGroup, FinancialItem } from 'src/app/interfaces/Financial';
import { v4 as uuidv4 } from 'uuid';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-category-group',
    templateUrl: './category-group.component.html',
    styleUrls: ['./category-group.component.scss'],
})
export class CategoryGroupComponent implements OnInit {
    @Input('allItems') allItems: FinancialGroup[];
    @Input('storageId') storageId: string;
    @ViewChild('list', { static: false }) list: IonList;

    selectedItem: FinancialItem | null = null;
    nameValue: string;
    priceValue: number;

    constructor(private storageService: StorageService) {}

    ngOnInit() {
    }

    newItem = (item: FinancialGroup) => {
        item.isNewItem = true;
    };

    closeItem = (item: FinancialGroup) => {
        item.isNewItem = false;
    };

    addItem = async (category: FinancialGroup) => {
        if (this.nameValue !== '') {
            const newItemId = uuidv4();
            category.items.push({
                id: newItemId,
                name: this.nameValue,
                price: this.priceValue,
            });
            category.totalAmount = this.calculateCategoryTotalAmount(category);
            this.nameValue = '';
            this.priceValue = 0;
            category.isNewItem = false;
            await this.storageService.set(this.storageId, this.allItems);
        }
    };

    deleteItem(currentItem: FinancialItem, currentCategory: FinancialGroup) {
        const itemIndex = currentCategory.items.findIndex(
            (item) => item.id === currentItem.id
        );
        if (itemIndex !== -1) {
            currentCategory.items.splice(itemIndex, 1);
            currentCategory.totalAmount =
                this.calculateCategoryTotalAmount(currentCategory);
            this.storageService.set(this.storageId, this.allItems);
        }
    }

    deleteCategory(
        currentCategory: FinancialGroup,
        allOutcome: FinancialGroup[]
    ) {
        const categoryIndex = allOutcome.findIndex(
            (category) => category.id === currentCategory.id
        );
        if (categoryIndex !== -1) {
            allOutcome.splice(categoryIndex, 1);
            this.storageService.set(this.storageId, this.allItems);
        }
    }

    editItem(financialItem: FinancialItem) {
        this.list.closeSlidingItems();
        this.selectedItem = financialItem;
    }

    stopEdit = async (financialGroup: FinancialGroup) => {
        this.selectedItem = null;
        financialGroup.totalAmount =
            this.calculateCategoryTotalAmount(financialGroup);
        await this.storageService.set(this.storageId, this.allItems);
    };

    private calculateCategoryTotalAmount(category: FinancialGroup) {
        return category.items.reduce(
            (total: number, item: FinancialItem) => total + item.price,
            0
        );
    }
}
