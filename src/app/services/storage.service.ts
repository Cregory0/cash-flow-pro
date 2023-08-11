import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Storage } from '@ionic/storage-angular';
import { FinancialGroup } from '../interfaces/Financial';

@Injectable({
    providedIn: 'root',
})
export class StorageService implements OnInit {
    private _storage: Storage | null = null;
    private dataSubject: Subject<FinancialGroup[]> = new Subject<FinancialGroup[]>();

    constructor(private storage: Storage) {
        this.init();
    }

    ngOnInit() {}

    private async ensureInitialized(): Promise<void> {
        if (!this._storage) {
            await this.init();
        }
    }

    async init() {
        this._storage = await this.storage.create();
    }

    public async set(key: string, value: FinancialGroup[]) {
        await this.ensureInitialized();
        try {
            if (!this._storage) {
                throw new Error('Storage instance is not created yet.');
            }

            await this._storage?.set(key, value);
            this.dataSubject.next(value);
        } catch (error) {
            console.error('Error while getting data from storage:', error);
            throw error;
        }
    }

    public getObservable(key: string): Observable<FinancialGroup[]> {
        return this.dataSubject.asObservable();
    }

    public async get(key: string): Promise<FinancialGroup[]> {
        await this.ensureInitialized();

        try {
            if (!this._storage) {
                throw new Error('Storage instance is not created yet.');
            }
            const data = await this._storage.get(key);
            return data;
        } catch (error) {
            console.error('Error while getting data from storage:', error);
            throw error;
        }
    }

    public async remove(key: string) {
        await this._storage?.remove(key);
    }

    public async clearAll() {
        await this.storage.clear();
    }

    public async getAllKeys(): Promise<string[]> {
        return await this.storage.keys();
    }

    public async getQuantity(): Promise<number> {
        return await this.storage.length();
    }
}
