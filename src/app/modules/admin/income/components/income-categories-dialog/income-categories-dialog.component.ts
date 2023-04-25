import {
    Component,
    OnInit,
    ChangeDetectorRef,
    Output,
    Inject,
    Input,
    EventEmitter,
} from '@angular/core';
import {
    IncomeCategory,
    getIncomeCategory,
} from 'app/shared/modals/income-category';
import { CommonService } from 'app/shared/services/common.service';
import { AES } from 'crypto-js';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
    selector: 'app-income-categories-dialog',
    templateUrl: './income-categories-dialog.component.html',
    styleUrls: ['./income-categories-dialog.component.scss'],
})
export class IncomeCategoriesDialogComponent {
    NewCateName = new IncomeCategory();

    constructor(
        private commonService: CommonService,
        private changeDetection: ChangeDetectorRef,
        public dialogRef: MatDialogRef<IncomeCategoriesDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: { name: IncomeCategory; result: any }
    ) {}

    ngOnInit(): void {}
    @Input() categoryId: any;
    @Input()
    @Output()
    dataEvent = new EventEmitter<string>();

    showAddDialog: boolean = true;
    showDeleteDialog: boolean = true;
    incomeCategory: getIncomeCategory = new getIncomeCategory();

    togglePopup: string = '';
    ngAfterContentInit() {
        console.log(this.togglePopup);
    }

    sendData() {
        // this.NewCateName.userId=parseInt(localStorage.getItem("userId"))
        this.commonService
            .addIncomeCategoryData(this.NewCateName)
            .subscribe((res) => {
                this.commonService.decryptData(res);
                console.log(this.commonService.decryptData(res));
                this.commonService
                    .getIncomeCategoryData(this.incomeCategory)
                    .subscribe((resp) => {
                        this.data.result = this.commonService.decryptData(resp);
                    });

                this.changeDetection.detectChanges();
                // this.dataEvent.emit('added');
            });
    }
    ngAfterViewInit(): void {}

    // closeDialog() {
    //     this.dataEvent.emit('closed');
    // }
    // confirmDelete() {
    //     console.log(this.categoryId);
    // }
}
