import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-add-role',
    templateUrl: './add-role.component.html',
    styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
    constructor(private commonService: CommonService, private router: Router) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    ngOnInit(): void {}
}
