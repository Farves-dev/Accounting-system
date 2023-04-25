import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-collect-dialog',
    templateUrl: './collect-dialog.component.html',
    styleUrls: ['./collect-dialog.component.scss'],
})
export class CollectDialogComponent implements OnInit {
    paymentMode = [
        { name: 'Gpay', id: '0' },
        { name: 'Phone Pe', id: '1' },
        { name: 'Credit Card/Debit Card', id: '2' },
        { name: 'cheque', id: '3' },
    ];

    accounts = [
        { name: 'Farves', id: '1' },
        { name: 'Safiyudeen', id: '2' },
        { name: 'Ilyas', id: '3' },
    ];
    constructor() {}

    forms: any[] = [{ amount: null, paymentMode: '', account: '' }];

    addForm() {
        this.forms.push({ amount: null, paymentMode: '', account: '' });
    }

    removeForm(index: number) {
        if (this.forms.length > 1) {
            this.forms.splice(index, 1);
        }
    }

    ngOnInit(): void {}
}
