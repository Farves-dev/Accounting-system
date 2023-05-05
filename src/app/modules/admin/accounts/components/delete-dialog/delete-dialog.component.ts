import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'app/shared/services/account.service';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
    constructor(
        private _accountService: AccountService,
        private _commonService: CommonService,
        public _dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {}

    userId: any;

    ngOnInit(): void {
        this.userId = parseInt(localStorage.getItem('userId'));
    }

    deleteAccount() {
        const req = {
            userId: this.userId,
            id: this.data.id,
        };

        this._accountService.deleteAccount(req).subscribe(
            (res) => {
                console.log(this._commonService.decryptData(res));
            },
            (err) => {
                console.error;
            }
        );
        this._dialogRef.close(true);
    }
}
