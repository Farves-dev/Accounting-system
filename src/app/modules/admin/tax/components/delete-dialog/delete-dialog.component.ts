import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { TaxService } from 'app/shared/services/tax.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
    constructor(
        private _taxService: TaxService,
        private _commonService: CommonService,
        public _dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {}

    userId: any;

    ngOnInit(): void {
        this.userId = parseInt(localStorage.getItem('userId'));
    }

    deleteTax() {
        const req = {
            userId: this.userId,
            id: this.data.id,
        };

        this._taxService.deleteTax(req).subscribe(
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
