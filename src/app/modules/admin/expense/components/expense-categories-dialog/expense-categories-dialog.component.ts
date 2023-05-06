import {
    Component,
    OnInit,
    ChangeDetectorRef,
    Output,
    Inject,
    Input,
    EventEmitter,
} from '@angular/core';

import { CommonService } from 'app/shared/services/common.service';
import { AES } from 'crypto-js';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { take } from 'rxjs';
import { CompressImageService } from 'app/shared/services/compress-image.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getExpenseCategory } from 'app/shared/modals/expense-category';
import { ExpenseService } from 'app/shared/services/expense.service';

@Component({
    selector: 'app-income-categories-dialog',
    templateUrl: './expense-categories-dialog.component.html',
    styleUrls: ['./expense-categories-dialog.component.scss'],
})
export class ExpenseCategoriesDialogComponent {
    addCategoryForm: FormGroup;

    showAddDialog: boolean = true;
    showDeleteDialog: boolean = true;
    expenseCategory: getExpenseCategory = new getExpenseCategory();
    imageUrl: any;
    fileToUpload: any;
    imageData: any;
    formData: any;
    userId: any;
    imageId: any;

    constructor(
        private _commonService: CommonService,
        private _compressImageService: CompressImageService,
        private _route: Router,
        private _expenseService: ExpenseService,
        private changeDetection: ChangeDetectorRef,
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ExpenseCategoriesDialogComponent> // @Inject(MAT_DIALOG_DATA) // public data: { name: AddIncomeCategory; result: any }
    ) {}

    ngOnInit(): void {
        this.userId = this._commonService.getUserId();
        this.addCategoryForm = this._formBuilder.group({
            categoryName: '',
            categoryType: 2,
            imageId: this.imageId,
            userId: this.userId,
        });
    }
    // @Input() categoryId: any;
    // @Input()
    // @Output()
    // dataEvent = new EventEmitter<string>();

    // togglePopup: string = '';
    ngAfterContentInit() {}

    sendData() {
        this.addCategoryForm.value.imageId = this.imageId;
        console.log(this.addCategoryForm.value);

        this._expenseService
            .addCategory(this.addCategoryForm.value)
            .subscribe((res) => {
                console.log(this._commonService.decryptData(res));
                this.addCategoryForm.reset();
                this.dialogRef.close(true);
                this.changeDetection.detectChanges();
            });
    }

    ngAfterViewInit(): void {}

    uploadImage(event: any) {
        let file = event.target.files[0];
        console.log(file);
        let reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(file);
        console.log(this.imageUrl);
        this.formatImage(file);
        this.addImage();
    }

    async formatImage(file: any) {
        console.log(file);
        this.fileToUpload = file;
        this.formData = new FormData();
        console.log(this.fileToUpload.size);
        //compressing image
        var fSizeinMb = this.fileToUpload.size / 1024;
        // if (fSizeinMb > 2) {
        // console.log(`Image size Before compressed: ${this.selectedFile.size} bytes.`)
        // console.log(fileNewName);
        this.formData.append('image', this.fileToUpload);
        /*  await this._compressImageService
            .compress(this.fileToUpload)
            .pipe(take(1))
            .subscribe((compressedImage) => {
                this.fileToUpload = compressedImage;
                console.log(this.fileToUpload);
                //set url for image
                // var imgURL = 'USR_IMG';
                // var fileExt = this.fileToUpload.name
                //     .split('?')[0]
                //     .split('.')
                //     .pop();
                // var fileNewName = imgURL + '.' + fileExt;
                //append file to formdata
                // console.log(this.fileToUpload);
                // console.log(fileNewName);
                this.formData.append('image', this.fileToUpload);
                console.log(this.formData);
            }); */
        // }
    }

    addImage() {
        console.log(this.fileToUpload);

        this._expenseService
            .addCategoryImage(this.formData)
            .subscribe((res) => {
                console.log(res);
                let reData = JSON.parse(JSON.stringify(res));
                this.imageId = reData.imageId;
            });
    }

    // closeDialog() {
    //     this.dataEvent.emit('closed');
    // }
    // confirmDelete() {
    //     console.log(this.categoryId);
    // }
}
