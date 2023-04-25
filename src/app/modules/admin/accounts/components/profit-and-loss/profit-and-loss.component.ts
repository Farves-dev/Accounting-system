import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';

@Component({
    selector: 'app-profit-and-loss',
    templateUrl: './profit-and-loss.component.html',
    styleUrls: ['./profit-and-loss.component.scss'],
})
export class ProfitAndLossComponent implements OnInit {
    constructor(private router: Router, private commonService: CommonService) {}

    navigateToHome() {
        this.commonService.navigateToHome();
    }

    ngOnInit(): void {}
}
